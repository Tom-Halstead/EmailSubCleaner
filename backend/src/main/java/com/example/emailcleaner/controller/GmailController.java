package com.example.emailcleaner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.emailcleaner.service.GmailService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/emails")
@CrossOrigin(origins = "http://localhost:3000")
public class GmailController {

    @Autowired
    private GmailService gmailService;

    @GetMapping
    public List<Map<String, String>> getMockEmails() {
        return gmailService.getMockEmails();
    }
}
