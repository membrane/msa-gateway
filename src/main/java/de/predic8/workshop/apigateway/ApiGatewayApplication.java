package de.predic8.workshop.apigateway;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.cloud.sleuth.metric.SpanMetricReporter;
import org.springframework.cloud.sleuth.zipkin.HttpZipkinSpanReporter;
import org.springframework.cloud.sleuth.zipkin.ZipkinProperties;
import org.springframework.cloud.sleuth.zipkin.ZipkinRestTemplateCustomizer;
import org.springframework.cloud.sleuth.zipkin.ZipkinSpanReporter;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@EnableDiscoveryClient
@EnableZuulProxy
@SpringBootApplication
public class ApiGatewayApplication {

	@Autowired
	public DiscoveryClient discovery;


	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}

	@Bean
	@ConditionalOnMissingBean
	public ZipkinSpanReporter reporter(SpanMetricReporter reporter, ZipkinProperties zipkin,
									   ZipkinRestTemplateCustomizer customizer) {
		RestTemplate rest = new RestTemplate();
		customizer.customize(rest);

		List<ServiceInstance> instances = discovery.getInstances("zipkin");

		if (instances.size() == 0 ) {
			System.out.println("Please start zipkin Server!");
			return null;
		}
		ServiceInstance instance = instances.get(0);

		String uri = instance.getUri().toString();

		System.out.println("instance.getUri().toString() = " + uri);

		return new HttpZipkinSpanReporter(rest, uri, zipkin.getFlushInterval(), reporter);
	}
}
