package com.example.emailcleaner.service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
public class GmailService {

    public List<Map<String, String>> getMockEmails() {
        return List.of(
            Map.of("sender", "Spotify", "subject", "New Release", "unsubscribe", "https://spotify.com/unsubscribe"),
            Map.of("sender", "Amazon", "subject", "Deal of the Day", "unsubscribe", "mailto:unsubscribe@amazon.com"),
            Map.of("sender", "Reddit", "subject", "Weekly Digest", "unsubscribe", "https://reddit.com/unsubscribe")
        );
    }
}
