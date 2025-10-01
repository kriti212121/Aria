// eWatch System - JIRA to Alert Conversion and Guide Tagging
class EWatchSystem {
    constructor(airaApp) {
        this.airaApp = airaApp;
        this.alerts = [];
        this.alertIdCounter = 17200;
        this.jiraTickets = [];
        this.guideTags = new Map(); // Map of guide IDs to alert tags
        
        this.init();
    }

    init() {
        this.initializeAlertData();
        this.initializeJIRASimulation();
        this.setupEventListeners();
    }

    // Initialize with sample alert data including the knives policy example
    initializeAlertData() {
        const knivesAlert = {
            id: "ALERT17200",
            jiraReference: "EWATCHOP-262200",
            title: "Knives Policy Loophole - Butterfly Knives in Wrong Category",
            severity: "High",
            status: "Active",
            source: "Agent reports",
            dateDetected: new Date("2025-08-26T18:15:00Z"),
            description: "Agents report that sellers are able to bypass keyword filters by listing \"butterfly knives\" under the Collectibles > Tools category instead of the Knives category.",
            impact: "Prohibited knives are appearing live on site. Buyers could purchase unsafe or illegal items.",
            frequency: "8 confirmed cases this week",
            evidence: ["screenshots_butterfly_knives.png", "listing_examples.png"],
            environment: {
                location: "Collectibles > Tools category (mis-categorization loophole)",
                category: "Weapons / Knives",
                policyLink: "Knives Policy (butterfly knives prohibited)",
                channelImpact: ["Agent Assist", "GUIDE"],
                referenceTables: "Policy prohibits \"butterfly knives\" and disguised knives"
            },
            resolution: {
                teammateInstructions: "Tell the seller that butterfly knives are prohibited on eBay, even if listed outside the Knives category. The listing must be removed.",
                customerInstructions: "Butterfly knives are prohibited on eBay. This applies across all categories, even if listed as a collectible or tool.",
                guideUpdate: "⚠️ TEMPORARY NOTICE: A system bug is allowing butterfly knives to be listed in other categories. These listings are still prohibited and should be removed immediately. Engineering is working on a fix."
            },
            governance: {
                proposedAction: "End non-compliant listings; escalate loophole fix to Product",
                escalationPath: "eWatch → Policy Manager → Product Engineering",
                governanceLevel: "High",
                resolutionStatus: "Pending"
            },
            affectedGuides: ["1", "3"], // Maps to existing content IDs in the system
            createdAt: new Date("2025-08-26T18:15:00Z"),
            updatedAt: new Date("2025-08-26T18:15:00Z"),
            resolvedAt: null,
            tags: ["knives", "policy", "loophole", "butterfly-knives", "collectibles", "tools"],
            priority: "P2",
            lifecycle: "New",
            alertGuide: {
                title: "ALERT GUIDE: Knives Policy Loophole",
                content: `
                    <div class="alert-guide-header">
                        <h1>🚨 ALERT GUIDE: Knives Policy Loophole</h1>
                        <div class="alert-meta">
                            <span class="alert-id">ALERT17200</span>
                            <span class="jira-ref">EWATCHOP-262200</span>
                            <span class="severity high">HIGH PRIORITY</span>
                        </div>
                    </div>

                    <div class="alert-summary">
                        <h2>1. Alert Information</h2>
                        <ul>
                            <li><strong>Alert ID / Jira reference:</strong> ALERT17200 / EWATCHOP-262200</li>
                            <li><strong>Source:</strong> Agent reports</li>
                            <li><strong>Date / time detected:</strong> 8/26/2025 18:15 UTC</li>
                            <li><strong>Severity:</strong> High (P2 – policy risk)</li>
                            <li><strong>Lifecycle state:</strong> New</li>
                        </ul>
                    </div>

                    <div class="problem-section">
                        <h2>2. Problem (captured alert)</h2>
                        <p><strong>Description:</strong> Agents report that sellers are able to bypass keyword filters by listing "butterfly knives" under the Collectibles > Tools category instead of the Knives category.</p>
                        <p><strong>Customer or agent impact:</strong> Prohibited knives are appearing live on site. Buyers could purchase unsafe or illegal items.</p>
                        <p><strong>Frequency:</strong> 8 confirmed cases this week.</p>
                        <p><strong>Evidence:</strong> Screenshots of active listings attached.</p>
                    </div>

                    <div class="environment-section">
                        <h2>3. Environment (context)</h2>
                        <ul>
                            <li><strong>Where it occurs:</strong> Collectibles > Tools category (mis-categorization loophole).</li>
                            <li><strong>Category:</strong> Weapons / Knives.</li>
                            <li><strong>Policy linkage:</strong> Knives Policy (butterfly knives prohibited).</li>
                            <li><strong>Channel impact:</strong> Agent Assist, GUIDE.</li>
                            <li><strong>Reference tables:</strong> Policy prohibits "butterfly knives" and disguised knives.</li>
                        </ul>
                    </div>

                    <div class="resolution-section">
                        <h2>4. Resolution (communications)</h2>
                        
                        <div class="teammate-instructions">
                            <h3>For Teammates:</h3>
                            <div class="instruction-box">
                                Tell the seller that butterfly knives are prohibited on eBay, even if listed outside the Knives category. The listing must be removed.
                            </div>
                        </div>

                        <div class="customer-instructions">
                            <h3>For Customers:</h3>
                            <div class="instruction-box">
                                Butterfly knives are prohibited on eBay. This applies across all categories, even if listed as a collectible or tool.
                            </div>
                        </div>

                        <div class="guide-update">
                            <h3>Temporary Guide Notice:</h3>
                            <div class="notice-box warning">
                                ⚠️ <strong>Known Issue:</strong> A system bug is allowing butterfly knives to be listed in other categories. These listings are still prohibited and should be removed immediately. Engineering is working on a fix.
                            </div>
                        </div>
                    </div>

                    <div class="governance-section">
                        <h2>5. Governance & Escalation</h2>
                        <ul>
                            <li><strong>Proposed Action:</strong> End non-compliant listings; escalate loophole fix to Product</li>
                            <li><strong>Escalation Path:</strong> eWatch → Policy Manager → Product Engineering</li>
                            <li><strong>Governance Level:</strong> High</li>
                            <li><strong>Resolution Status:</strong> Pending</li>
                        </ul>
                    </div>
                `,
                createdAt: new Date("2025-08-26T18:15:00Z"),
                lastUpdated: new Date("2025-08-26T18:15:00Z")
            }
        };

        // Add sample shipping label alert
        const shippingAlert = {
            id: "ALERT17201",
            jiraReference: "EWATCHOP-267647",
            title: "Sellers unable to download label getting error message",
            severity: "Medium",
            status: "Active",
            source: "Customer reports",
            dateDetected: new Date("2025-09-02T14:30:00Z"),
            description: "Sellers getting an error message as 'We're experiencing technical issues. Please try again later' - US when trying to download shipping labels in postage labels page.",
            impact: "Sellers unable to download shipping label getting error message. This affects their ability to ship items and complete transactions.",
            frequency: "Multiple reports across US region",
            evidence: ["error_screenshot.png", "browser_console_logs.txt"],
            environment: {
                location: "Postage labels page - US region",
                category: "Shipping / Labels",
                policyLink: "Shipping Guidelines",
                channelImpact: ["Seller Hub", "Shipping Tools"],
                referenceTables: "US shipping label generation system"
            },
            resolution: {
                teammateInstructions: "Acknowledge the issue and inform sellers that engineering is working on a fix. Provide alternative shipping methods if available.",
                customerInstructions: "We're aware of the shipping label download issue and are working on a fix. Please try again later or contact support for assistance.",
                guideUpdate: "Known issue: Some sellers may experience difficulties downloading shipping labels. Engineering is investigating."
            },
            governance: {
                proposedAction: "Escalate to engineering team for immediate fix",
                escalationPath: "eWatch → Technical Support → Engineering",
                governanceLevel: "Medium",
                resolutionStatus: "In Progress"
            },
            affectedGuides: ["GUIDE_SHIPPING_001", "GUIDE_LABELS_002"],
            createdAt: new Date("2025-09-02T14:30:00Z"),
            updatedAt: new Date("2025-09-02T15:45:00Z"),
            resolvedAt: null,
            tags: ["shipping", "labels", "error", "technical-issue", "us-region"],
            priority: "P3",
            lifecycle: "Active"
        };

        // Add CNT-163414 based alert
        const cmsAuthAlert = {
            id: "ALERT17202",
            jiraReference: "CNT-163414",
            title: "Content Management System - User Authentication Issues",
            severity: "High",
            status: "Active",
            source: "System reports",
            dateDetected: new Date("2025-09-23T15:00:00Z"),
            description: "Users experiencing authentication failures when accessing content management features. Multiple reports of login timeouts and session expiration issues affecting content editors and reviewers.",
            impact: "150+ affected users unable to access content management system. Content publishing delays affecting business operations and customer support documentation updates.",
            frequency: "Continuous reports since 15:00 UTC, affecting multiple user sessions",
            evidence: ["session_timeout_logs.txt", "authentication_error_screenshots.png", "browser_console_errors.json"],
            environment: {
                location: "Content Management Dashboard - Authentication Layer",
                category: "Authentication / User Session",
                policyLink: "Content Management Access Policy",
                channelImpact: ["Content Editor", "Reviewer Dashboard", "Publishing Workflow"],
                referenceTables: "User authentication system, session management, content access controls"
            },
            resolution: {
                teammateInstructions: "Inform users about the authentication issue. Advise them to clear browser cache and cookies, try incognito mode, or use alternative browsers. Escalate persistent issues to technical support.",
                customerInstructions: "We're experiencing authentication issues with the content management system. Please try clearing your browser cache, using incognito mode, or contact support for immediate assistance.",
                guideUpdate: "⚠️ KNOWN ISSUE: Content management system authentication may fail or timeout frequently. Users may need to re-authenticate multiple times. Engineering is implementing a fix."
            },
            governance: {
                proposedAction: "Immediate escalation to engineering; implement session timeout workaround; monitor user impact",
                escalationPath: "eWatch → Content Team → Authentication Engineering → Infrastructure",
                governanceLevel: "High",
                resolutionStatus: "In Progress"
            },
            affectedGuides: ["1", "2", "3", "4", "5"], // All content management guides affected
            createdAt: new Date("2025-09-23T15:00:00Z"),
            updatedAt: new Date("2025-09-23T15:30:00Z"),
            resolvedAt: null,
            tags: ["authentication", "content-management", "session", "login", "cms", "timeout"],
            priority: "P2",
            lifecycle: "Active",
            alertGuide: {
                title: "ALERT GUIDE: Content Management Authentication Issues",
                content: `
                    <div class="alert-guide-header">
                        <h1>🚨 ALERT GUIDE: Content Management Authentication Issues</h1>
                        <div class="alert-meta">
                            <span class="alert-id">ALERT17202</span>
                            <span class="jira-ref">CNT-163414</span>
                            <span class="severity high">HIGH PRIORITY</span>
                        </div>
                    </div>

                    <div class="alert-summary">
                        <h2>1. Alert Information</h2>
                        <ul>
                            <li><strong>Alert ID / JIRA reference:</strong> ALERT17202 / CNT-163414</li>
                            <li><strong>Source:</strong> System reports / Content Team</li>
                            <li><strong>Date / time detected:</strong> 9/23/2025 15:00 UTC</li>
                            <li><strong>Severity:</strong> High (P2 – business impact)</li>
                            <li><strong>Lifecycle state:</strong> Active</li>
                            <li><strong>Affected Version:</strong> v2.1.3</li>
                            <li><strong>Environment:</strong> Production</li>
                        </ul>
                    </div>

                    <div class="problem-section">
                        <h2>2. Problem (captured alert)</h2>
                        <p><strong>Description:</strong> Users experiencing authentication failures when accessing content management features. Multiple reports of login timeouts and session expiration issues affecting content editors and reviewers.</p>
                        <p><strong>Customer or agent impact:</strong> 150+ affected users unable to access content management system. Content publishing delays affecting business operations and customer support documentation updates.</p>
                        <p><strong>Frequency:</strong> Continuous reports since 15:00 UTC, affecting multiple user sessions.</p>
                        <p><strong>Evidence:</strong> Session timeout logs, authentication error screenshots, browser console errors attached.</p>
                        
                        <div class="reproduction-steps">
                            <h3>Reproduction Steps:</h3>
                            <ol>
                                <li>Navigate to content management dashboard</li>
                                <li>Attempt to login with valid credentials</li>
                                <li>Session expires after 2-3 minutes</li>
                                <li>User forced to re-authenticate repeatedly</li>
                            </ol>
                        </div>
                    </div>

                    <div class="environment-section">
                        <h2>3. Environment (context)</h2>
                        <ul>
                            <li><strong>Where it occurs:</strong> Content Management Dashboard - Authentication Layer</li>
                            <li><strong>Category:</strong> Authentication / User Session</li>
                            <li><strong>Policy linkage:</strong> Content Management Access Policy</li>
                            <li><strong>Channel impact:</strong> Content Editor, Reviewer Dashboard, Publishing Workflow</li>
                            <li><strong>Reference tables:</strong> User authentication system, session management, content access controls</li>
                            <li><strong>Components affected:</strong> Content Management, Authentication, User Session</li>
                            <li><strong>Business impact:</strong> Content publishing delays</li>
                        </ul>
                    </div>

                    <div class="resolution-section">
                        <h2>4. Resolution (communications)</h2>
                        
                        <div class="teammate-instructions">
                            <h3>For Teammates:</h3>
                            <div class="instruction-box">
                                Inform users about the authentication issue. Advise them to:
                                <ul>
                                    <li>Clear browser cache and cookies</li>
                                    <li>Try incognito/private browsing mode</li>
                                    <li>Use alternative browsers (Chrome, Firefox, Safari)</li>
                                    <li>Refresh the page and retry login</li>
                                    <li>Contact technical support for persistent issues</li>
                                </ul>
                                <strong>Escalation:</strong> If user cannot access after trying above steps, escalate immediately to technical support with user details and error messages.
                            </div>
                        </div>

                        <div class="customer-instructions">
                            <h3>For Customers:</h3>
                            <div class="instruction-box">
                                We're experiencing authentication issues with the content management system. To resolve this:
                                <ol>
                                    <li>Clear your browser cache and cookies</li>
                                    <li>Try using incognito/private browsing mode</li>
                                    <li>Use a different browser if possible</li>
                                    <li>Refresh the page and attempt login again</li>
                                </ol>
                                If issues persist, please contact support immediately with your username and any error messages you see.
                            </div>
                        </div>

                        <div class="guide-update">
                            <h3>Temporary Guide Notice:</h3>
                            <div class="notice-box warning">
                                ⚠️ <strong>Known Issue:</strong> Content management system authentication may fail or timeout frequently. Users may need to re-authenticate multiple times. Engineering is implementing a fix. Expected resolution: 2-4 hours.
                            </div>
                        </div>

                        <div class="workaround-section">
                            <h3>Temporary Workarounds:</h3>
                            <div class="instruction-box">
                                <ul>
                                    <li><strong>For urgent content updates:</strong> Use the mobile app if available</li>
                                    <li><strong>For critical publishing:</strong> Contact support for manual publishing assistance</li>
                                    <li><strong>For content editing:</strong> Prepare content in external editors and paste when system is stable</li>
                                    <li><strong>Session management:</strong> Save work frequently (every 2-3 minutes) to prevent data loss</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="governance-section">
                        <h2>5. Governance & Escalation</h2>
                        <ul>
                            <li><strong>Proposed Action:</strong> Immediate escalation to engineering; implement session timeout workaround; monitor user impact</li>
                            <li><strong>Escalation Path:</strong> eWatch → Content Team → Authentication Engineering → Infrastructure</li>
                            <li><strong>Governance Level:</strong> High</li>
                            <li><strong>Resolution Status:</strong> In Progress</li>
                            <li><strong>Expected Resolution:</strong> 2-4 hours</li>
                            <li><strong>Monitoring:</strong> Real-time user session monitoring enabled</li>
                        </ul>
                    </div>

                    <div class="technical-details">
                        <h2>6. Technical Details</h2>
                        <div class="tech-info">
                            <h3>Error Patterns:</h3>
                            <ul>
                                <li>Session timeout after 2-3 minutes (expected: 30 minutes)</li>
                                <li>Authentication token refresh failures</li>
                                <li>CORS errors in browser console</li>
                                <li>502/503 errors from authentication service</li>
                            </ul>
                            
                            <h3>Affected Systems:</h3>
                            <ul>
                                <li>Content Management Dashboard</li>
                                <li>User Authentication Service</li>
                                <li>Session Management Service</li>
                                <li>Content Publishing Workflow</li>
                            </ul>
                            
                            <h3>Monitoring Metrics:</h3>
                            <ul>
                                <li>Authentication failure rate: 45% (normal: <5%)</li>
                                <li>Session duration: 2.3 minutes (normal: 30 minutes)</li>
                                <li>User complaints: 150+ reports</li>
                                <li>System availability: 78% (normal: 99.5%)</li>
                            </ul>
                        </div>
                    </div>

                    <div class="communication-templates">
                        <h2>7. Communication Templates</h2>
                        
                        <div class="template-section">
                            <h3>Email Template for Affected Users:</h3>
                            <div class="template-box">
                                <strong>Subject:</strong> Content Management System - Authentication Issues (CNT-163414)<br><br>
                                
                                Dear Content Team,<br><br>
                                
                                We are currently experiencing authentication issues with our content management system. You may encounter:<br>
                                • Frequent login timeouts<br>
                                • Session expiration after 2-3 minutes<br>
                                • Need to re-authenticate repeatedly<br><br>
                                
                                <strong>Immediate Actions:</strong><br>
                                1. Save your work frequently (every 2-3 minutes)<br>
                                2. Use incognito/private browsing mode<br>
                                3. Clear browser cache if experiencing issues<br><br>
                                
                                Our engineering team is actively working on a fix. Expected resolution: 2-4 hours.<br><br>
                                
                                For urgent content needs, please contact support at [support-email].<br><br>
                                
                                We apologize for the inconvenience.<br>
                                Technical Support Team
                            </div>
                        </div>

                        <div class="template-section">
                            <h3>Status Page Update:</h3>
                            <div class="template-box">
                                <strong>🔴 INVESTIGATING:</strong> Content Management Authentication Issues<br>
                                <strong>Started:</strong> Sep 23, 2025 15:00 UTC<br>
                                <strong>Affected:</strong> Content Management System<br><br>
                                
                                We are investigating reports of authentication failures and session timeouts in our content management system. Users may experience frequent re-authentication requests.<br><br>
                                
                                <strong>Workaround:</strong> Use incognito mode and save work frequently.<br>
                                <strong>Next Update:</strong> 30 minutes
                            </div>
                        </div>
                    </div>
                `,
                createdAt: new Date("2025-09-23T15:00:00Z"),
                lastUpdated: new Date("2025-09-23T15:30:00Z")
            }
        };

        this.alerts = [cmsAuthAlert, knivesAlert, shippingAlert];
        this.updateGuideTags();
    }

    // Simulate JIRA ticket processing
    initializeJIRASimulation() {
        // Simulate incoming JIRA tickets including CNT-163414 pattern
        this.jiraTickets = [
            {
                key: "CNT-163414",
                summary: "Content Management System - User Authentication Issues",
                description: "Users experiencing authentication failures when accessing content management features. Multiple reports of login timeouts and session expiration issues affecting content editors and reviewers.",
                priority: "High",
                status: "Open",
                created: new Date("2025-09-23T15:00:00Z"),
                reporter: "content.team@ebay.com",
                labels: ["authentication", "content-management", "session", "login", "cms"],
                components: ["Content Management", "Authentication", "User Session"],
                affectedVersion: "v2.1.3",
                environment: "Production",
                issueType: "Bug",
                customFields: {
                    impactLevel: "High",
                    userCount: "150+ affected users",
                    businessImpact: "Content publishing delays",
                    reproductionSteps: [
                        "1. Navigate to content management dashboard",
                        "2. Attempt to login with valid credentials", 
                        "3. Session expires after 2-3 minutes",
                        "4. User forced to re-authenticate repeatedly"
                    ]
                }
            },
            {
                key: "EWATCHOP-262200",
                summary: "Knives Policy Loophole - Butterfly knives in wrong category",
                description: "Agents report sellers bypassing filters by listing butterfly knives in Collectibles > Tools",
                priority: "High",
                status: "Open",
                created: new Date("2025-08-26T18:15:00Z"),
                reporter: "agent.reports@ebay.com",
                labels: ["policy", "knives", "loophole", "collectibles"]
            },
            {
                key: "EWATCHOP-267647",
                summary: "Shipping label download error - US region",
                description: "Multiple reports of sellers unable to download shipping labels with technical error",
                priority: "Medium",
                status: "In Progress",
                created: new Date("2025-09-02T14:30:00Z"),
                reporter: "customer.support@ebay.com",
                labels: ["shipping", "labels", "technical", "us-region"]
            }
        ];
    }

    setupEventListeners() {
        // Listen for new JIRA tickets (simulated)
        this.startJIRAPolling();
    }

    startJIRAPolling() {
        // Simulate periodic JIRA polling
        setInterval(() => {
            this.checkForNewJIRATickets();
        }, 30000); // Check every 30 seconds
    }

    checkForNewJIRATickets() {
        // Simulate finding new JIRA tickets
        if (Math.random() > 0.95) { // 5% chance of new ticket
            this.simulateNewJIRATicket();
        }
    }

    simulateNewJIRATicket() {
        const sampleTickets = [
            {
                key: `EWATCHOP-${Date.now()}`,
                summary: "Payment processing delays in checkout",
                description: "Users reporting delays in payment processing during checkout flow",
                priority: "High",
                status: "Open",
                created: new Date(),
                reporter: "customer.support@ebay.com",
                labels: ["payment", "checkout", "delays"]
            },
            {
                key: `EWATCHOP-${Date.now()}`,
                summary: "Search results showing incorrect items",
                description: "Search algorithm returning irrelevant results for specific keywords",
                priority: "Medium",
                status: "Open",
                created: new Date(),
                reporter: "quality.assurance@ebay.com",
                labels: ["search", "algorithm", "relevance"]
            }
        ];

        const newTicket = sampleTickets[Math.floor(Math.random() * sampleTickets.length)];
        this.processJIRATicket(newTicket);
    }

    processJIRATicket(jiraTicket) {
        // Convert JIRA ticket to eWatch alert
        const alert = this.convertJIRAToAlert(jiraTicket);
        this.createAlert(alert);
        
        // Notify the system
        if (this.airaApp) {
            this.airaApp.showNotification(`🚨 New eWatch Alert: ${alert.title}`, 'warning');
        }
    }

    convertJIRAToAlert(jiraTicket) {
        const alertId = `ALERT${this.alertIdCounter++}`;
        
        return {
            id: alertId,
            jiraReference: jiraTicket.key,
            title: jiraTicket.summary,
            severity: this.mapPriorityToSeverity(jiraTicket.priority),
            status: "New",
            source: this.extractSource(jiraTicket.reporter),
            dateDetected: jiraTicket.created,
            description: jiraTicket.description,
            impact: this.generateImpactAssessment(jiraTicket),
            frequency: "Under investigation",
            evidence: [],
            environment: this.analyzeEnvironment(jiraTicket),
            resolution: this.generateResolutionTemplate(jiraTicket),
            governance: this.generateGovernanceInfo(jiraTicket),
            affectedGuides: this.identifyAffectedGuides(jiraTicket),
            createdAt: new Date(),
            updatedAt: new Date(),
            resolvedAt: null,
            tags: jiraTicket.labels || [],
            priority: jiraTicket.priority,
            lifecycle: "New"
        };
    }

    mapPriorityToSeverity(priority) {
        const mapping = {
            "Highest": "Critical",
            "High": "High",
            "Medium": "Medium",
            "Low": "Low",
            "Lowest": "Low"
        };
        return mapping[priority] || "Medium";
    }

    extractSource(reporter) {
        if (reporter.includes("agent")) return "Agent reports";
        if (reporter.includes("customer")) return "Customer reports";
        if (reporter.includes("quality")) return "QA reports";
        return "System reports";
    }

    generateImpactAssessment(jiraTicket) {
        // Analyze ticket content to generate impact assessment
        const description = jiraTicket.description.toLowerCase();
        
        if (description.includes("payment") || description.includes("checkout")) {
            return "Users unable to complete purchases, affecting revenue and customer satisfaction.";
        }
        if (description.includes("search")) {
            return "Users unable to find relevant items, affecting discoverability and sales.";
        }
        if (description.includes("shipping") || description.includes("label")) {
            return "Sellers unable to ship items, affecting order fulfillment and customer experience.";
        }
        
        return "System functionality impacted, affecting user experience.";
    }

    analyzeEnvironment(jiraTicket) {
        const labels = jiraTicket.labels || [];
        const description = jiraTicket.description.toLowerCase();
        
        let category = "General";
        let location = "Platform-wide";
        
        if (labels.includes("payment") || description.includes("payment")) {
            category = "Payments / Checkout";
            location = "Checkout flow";
        } else if (labels.includes("shipping") || description.includes("shipping")) {
            category = "Shipping / Fulfillment";
            location = "Shipping tools";
        } else if (labels.includes("search") || description.includes("search")) {
            category = "Search / Discovery";
            location = "Search results";
        }
        
        return {
            location: location,
            category: category,
            policyLink: this.determinePolicyLink(category),
            channelImpact: this.determineChannelImpact(labels),
            referenceTables: `${category} system components`
        };
    }

    determinePolicyLink(category) {
        const policyMap = {
            "Payments / Checkout": "Payment Policy",
            "Shipping / Fulfillment": "Shipping Policy",
            "Search / Discovery": "Search Guidelines",
            "Weapons / Knives": "Knives Policy"
        };
        return policyMap[category] || "General Guidelines";
    }

    determineChannelImpact(labels) {
        const channels = [];
        
        if (labels.includes("payment") || labels.includes("checkout")) {
            channels.push("Checkout Flow", "Payment Center");
        }
        if (labels.includes("shipping") || labels.includes("labels")) {
            channels.push("Seller Hub", "Shipping Tools");
        }
        if (labels.includes("search")) {
            channels.push("Search Results", "Browse Pages");
        }
        
        return channels.length > 0 ? channels : ["Platform"];
    }

    generateResolutionTemplate(jiraTicket) {
        const category = this.analyzeEnvironment(jiraTicket).category;
        
        const templates = {
            "Payments / Checkout": {
                teammateInstructions: "Inform users about the payment issue and provide alternative payment methods if available.",
                customerInstructions: "We're experiencing payment processing issues. Please try again or use an alternative payment method.",
                guideUpdate: "Known issue: Payment processing may be delayed. Engineering is investigating."
            },
            "Shipping / Fulfillment": {
                teammateInstructions: "Acknowledge shipping issues and provide manual shipping alternatives where possible.",
                customerInstructions: "We're aware of shipping tool issues and are working on a fix. Please contact support for assistance.",
                guideUpdate: "Known issue: Shipping tools may be experiencing difficulties. Manual alternatives available."
            },
            "Search / Discovery": {
                teammateInstructions: "Help users with manual search alternatives and report search quality issues.",
                customerInstructions: "Search results may not be optimal. Try different keywords or browse categories directly.",
                guideUpdate: "Known issue: Search algorithm is being optimized for better results."
            }
        };
        
        return templates[category] || {
            teammateInstructions: "Acknowledge the issue and escalate to appropriate team for resolution.",
            customerInstructions: "We're aware of this issue and working on a solution. Please try again later.",
            guideUpdate: "Known issue: System functionality may be impacted. Engineering is investigating."
        };
    }

    generateGovernanceInfo(jiraTicket) {
        const severity = this.mapPriorityToSeverity(jiraTicket.priority);
        
        return {
            proposedAction: this.determineProposedAction(severity),
            escalationPath: this.determineEscalationPath(jiraTicket),
            governanceLevel: severity,
            resolutionStatus: "Pending"
        };
    }

    determineProposedAction(severity) {
        const actions = {
            "Critical": "Immediate escalation to engineering; implement emergency workaround",
            "High": "Escalate to product team; prioritize fix in current sprint",
            "Medium": "Add to engineering backlog; implement within 2 weeks",
            "Low": "Monitor and address in next maintenance cycle"
        };
        return actions[severity] || "Monitor and assess impact";
    }

    determineEscalationPath(jiraTicket) {
        const labels = jiraTicket.labels || [];
        
        if (labels.includes("payment")) {
            return "eWatch → Payments Team → Engineering";
        }
        if (labels.includes("shipping")) {
            return "eWatch → Logistics Team → Engineering";
        }
        if (labels.includes("search")) {
            return "eWatch → Search Team → Data Science";
        }
        
        return "eWatch → Product Manager → Engineering";
    }

    identifyAffectedGuides(jiraTicket) {
        // Analyze JIRA ticket content to identify potentially affected guides
        const description = jiraTicket.description.toLowerCase();
        const labels = jiraTicket.labels || [];
        const affectedGuides = [];
        
        // Match against existing content in Aira platform
        if (this.airaApp && this.airaApp.contentData) {
            this.airaApp.contentData.forEach(content => {
                const contentText = (content.title + " " + (content.content || "")).toLowerCase();
                
                // Check for keyword matches
                const keywords = [...labels, ...this.extractKeywords(description)];
                const hasMatch = keywords.some(keyword => 
                    contentText.includes(keyword.toLowerCase())
                );
                
                if (hasMatch) {
                    affectedGuides.push(content.id.toString());
                }
            });
        }
        
        return affectedGuides;
    }

    extractKeywords(text) {
        // Extract relevant keywords from text
        const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should'];
        
        return text
            .split(/\s+/)
            .map(word => word.replace(/[^\w]/g, ''))
            .filter(word => word.length > 3 && !commonWords.includes(word.toLowerCase()))
            .slice(0, 10); // Limit to top 10 keywords
    }

    createAlert(alert) {
        this.alerts.unshift(alert); // Add to beginning of array
        this.updateGuideTags();
        this.notifyAlertCreated(alert);
    }

    updateGuideTags() {
        // Clear existing tags
        this.guideTags.clear();
        
        // Process each alert to update guide tags
        this.alerts.forEach(alert => {
            if (alert.status !== "Resolved") {
                alert.affectedGuides.forEach(guideId => {
                    if (!this.guideTags.has(guideId)) {
                        this.guideTags.set(guideId, []);
                    }
                    this.guideTags.get(guideId).push({
                        alertId: alert.id,
                        title: alert.title,
                        severity: alert.severity,
                        notice: alert.resolution.guideUpdate,
                        createdAt: alert.createdAt
                    });
                });
            }
        });
    }

    notifyAlertCreated(alert) {
        // Notify relevant teams about new alert
        console.log(`eWatch Alert Created: ${alert.id} - ${alert.title}`);
        
        // Update UI if Aira app is available
        if (this.airaApp) {
            // Update alert metrics in dashboard
            this.updateDashboardMetrics();
            
            // Show notification
            this.airaApp.showNotification(
                `🚨 eWatch Alert: ${alert.title} (${alert.severity})`, 
                alert.severity === 'Critical' ? 'error' : 'warning'
            );
        }
    }

    updateDashboardMetrics() {
        // Update dashboard with alert metrics
        const activeAlerts = this.alerts.filter(a => a.status !== "Resolved");
        const criticalAlerts = activeAlerts.filter(a => a.severity === "Critical");
        const highAlerts = activeAlerts.filter(a => a.severity === "High");
        
        // This would integrate with the dashboard metrics
        console.log(`Active Alerts: ${activeAlerts.length}, Critical: ${criticalAlerts.length}, High: ${highAlerts.length}`);
    }

    // Public API methods
    getAlerts(filters = {}) {
        let filteredAlerts = [...this.alerts];
        
        if (filters.status) {
            filteredAlerts = filteredAlerts.filter(a => a.status === filters.status);
        }
        
        if (filters.severity) {
            filteredAlerts = filteredAlerts.filter(a => a.severity === filters.severity);
        }
        
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            filteredAlerts = filteredAlerts.filter(a => 
                a.title.toLowerCase().includes(searchTerm) ||
                a.description.toLowerCase().includes(searchTerm) ||
                a.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }
        
        return filteredAlerts;
    }

    getAlert(alertId) {
        return this.alerts.find(a => a.id === alertId);
    }

    updateAlert(alertId, updates) {
        const alertIndex = this.alerts.findIndex(a => a.id === alertId);
        if (alertIndex !== -1) {
            this.alerts[alertIndex] = { ...this.alerts[alertIndex], ...updates, updatedAt: new Date() };
            this.updateGuideTags();
            return this.alerts[alertIndex];
        }
        return null;
    }

    resolveAlert(alertId, resolution) {
        const alert = this.getAlert(alertId);
        if (alert) {
            alert.status = "Resolved";
            alert.resolvedAt = new Date();
            alert.resolution = { ...alert.resolution, ...resolution };
            this.updateGuideTags();
            
            if (this.airaApp) {
                this.airaApp.showNotification(`✅ Alert resolved: ${alert.title}`, 'success');
            }
            
            return alert;
        }
        return null;
    }

    getGuideAlerts(guideId) {
        return this.guideTags.get(guideId.toString()) || [];
    }

    hasActiveAlerts(guideId) {
        return this.guideTags.has(guideId.toString());
    }

    // Show alert guide for a specific alert
    showAlertGuide(alertId) {
        const alert = this.getAlert(alertId);
        if (alert && alert.alertGuide) {
            return alert.alertGuide;
        }
        return null;
    }

    // Get content with alert notices injected
    getContentWithAlertNotices(contentId) {
        const alerts = this.getGuideAlerts(contentId);
        if (alerts.length === 0) return null;

        let alertNotices = '<div class="alert-notices-container">';
        alerts.forEach(alert => {
            alertNotices += `
                <div class="alert-notice ${alert.severity.toLowerCase()}">
                    <div class="alert-notice-header">
                        <i class="fas fa-exclamation-triangle"></i>
                        <strong>ACTIVE ALERT: ${alert.title}</strong>
                        <span class="alert-notice-id">${alert.alertId}</span>
                    </div>
                    <div class="alert-notice-content">
                        ${alert.notice}
                    </div>
                    <div class="alert-notice-actions">
                        <button class="btn btn-sm btn-outline view-alert-guide-btn" data-alert-id="${alert.alertId}">
                            <i class="fas fa-book"></i>
                            View Alert Guide
                        </button>
                        <button class="btn btn-sm btn-outline view-full-alert-btn" data-alert-id="${alert.alertId}">
                            <i class="fas fa-external-link-alt"></i>
                            View Full Alert
                        </button>
                    </div>
                </div>
            `;
        });
        alertNotices += '</div>';

        return alertNotices;
    }

    // Create alert guide modal
    showAlertGuideModal(alertId) {
        const alertGuide = this.showAlertGuide(alertId);
        if (!alertGuide) return;

        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.id = 'alert-guide-modal';
        modal.innerHTML = `
            <div class="modal-content large alert-guide-modal">
                <div class="modal-header">
                    <h2>${alertGuide.title}</h2>
                    <div class="alert-guide-actions">
                        <button class="btn btn-outline print-guide-btn">
                            <i class="fas fa-print"></i>
                            Print Guide
                        </button>
                        <button class="btn btn-outline share-guide-btn">
                            <i class="fas fa-share"></i>
                            Share Guide
                        </button>
                        <button class="modal-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="alert-guide-content">
                        ${alertGuide.content}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary close-guide-btn">Close</button>
                    <button class="btn btn-primary update-guides-btn" data-alert-id="${alertId}">
                        <i class="fas fa-sync"></i>
                        Update Affected Guides
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.initializeAlertGuideModal(modal, alertId);
    }

    initializeAlertGuideModal(modal, alertId) {
        // Close modal
        const closeBtn = modal.querySelector('.modal-close');
        const closeGuideBtn = modal.querySelector('.close-guide-btn');
        
        [closeBtn, closeGuideBtn].forEach(btn => {
            btn.addEventListener('click', () => {
                modal.remove();
            });
        });

        // Print guide
        const printBtn = modal.querySelector('.print-guide-btn');
        if (printBtn) {
            printBtn.addEventListener('click', () => {
                this.printAlertGuide(alertId);
            });
        }

        // Share guide
        const shareBtn = modal.querySelector('.share-guide-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                this.shareAlertGuide(alertId);
            });
        }

        // Update affected guides
        const updateBtn = modal.querySelector('.update-guides-btn');
        if (updateBtn) {
            updateBtn.addEventListener('click', () => {
                this.updateAffectedGuides(alertId);
                modal.remove();
            });
        }
    }

    printAlertGuide(alertId) {
        const alertGuide = this.showAlertGuide(alertId);
        if (!alertGuide) return;

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${alertGuide.title}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                    .alert-guide-header h1 { color: #dc2626; border-bottom: 3px solid #dc2626; padding-bottom: 10px; }
                    .alert-meta { background: #fee2e2; padding: 15px; margin: 20px 0; border-radius: 5px; }
                    .alert-meta span { margin-right: 20px; font-weight: bold; }
                    .severity.high { color: #dc2626; }
                    h2 { color: #1f2937; margin-top: 30px; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; }
                    .instruction-box, .notice-box { background: #f3f4f6; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #3b82f6; }
                    .notice-box.warning { border-left-color: #f59e0b; background: #fef3c7; }
                    ul, ol { margin: 10px 0; padding-left: 30px; }
                    li { margin: 5px 0; }
                    @media print { .no-print { display: none; } }
                </style>
            </head>
            <body>
                ${alertGuide.content}
                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
                    <p>Generated by eWatch System on ${new Date().toLocaleString()}</p>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }

    shareAlertGuide(alertId) {
        const alert = this.getAlert(alertId);
        if (!alert) return;

        // Create shareable link or copy to clipboard
        const shareText = `🚨 ALERT GUIDE: ${alert.title}\n\nAlert ID: ${alert.id}\nJIRA: ${alert.jiraReference}\nSeverity: ${alert.severity}\n\nView full guide in eWatch system.`;
        
        if (navigator.share) {
            navigator.share({
                title: alert.title,
                text: shareText,
                url: window.location.href
            });
        } else if (navigator.clipboard) {
            navigator.clipboard.writeText(shareText).then(() => {
                if (this.airaApp) {
                    this.airaApp.showNotification('Alert guide details copied to clipboard', 'success');
                }
            });
        }
    }

    updateAffectedGuides(alertId) {
        const alert = this.getAlert(alertId);
        if (!alert || !this.airaApp) return;

        // Show confirmation
        const affectedCount = alert.affectedGuides.length;
        if (confirm(`This will update ${affectedCount} affected guide(s) with the alert notice. Continue?`)) {
            // Simulate updating guides
            if (this.airaApp) {
                this.airaApp.showNotification(`Updating ${affectedCount} affected guides...`, 'info');
                
                setTimeout(() => {
                    this.airaApp.showNotification(`✅ ${affectedCount} guides updated with alert notice`, 'success');
                    
                    // Update the content table to show alert indicators
                    this.airaApp.updateContentTable();
                }, 2000);
            }
        }
    }

    // Manual alert creation for testing
    createManualAlert(alertData) {
        const alert = {
            id: `ALERT${this.alertIdCounter++}`,
            jiraReference: alertData.jiraReference || `MANUAL-${Date.now()}`,
            title: alertData.title,
            severity: alertData.severity || "Medium",
            status: "New",
            source: alertData.source || "Manual creation",
            dateDetected: new Date(),
            description: alertData.description,
            impact: alertData.impact || "Impact assessment needed",
            frequency: alertData.frequency || "Unknown",
            evidence: alertData.evidence || [],
            environment: alertData.environment || {
                location: "Unknown",
                category: "General",
                policyLink: "General Guidelines",
                channelImpact: ["Platform"]
            },
            resolution: alertData.resolution || {
                teammateInstructions: "Instructions needed",
                customerInstructions: "Customer guidance needed",
                guideUpdate: "Guide update needed"
            },
            governance: alertData.governance || {
                proposedAction: "Assessment needed",
                escalationPath: "eWatch → Product Manager",
                governanceLevel: "Medium",
                resolutionStatus: "Pending"
            },
            affectedGuides: alertData.affectedGuides || [],
            createdAt: new Date(),
            updatedAt: new Date(),
            resolvedAt: null,
            tags: alertData.tags || [],
            priority: alertData.priority || "Medium",
            lifecycle: "New"
        };
        
        this.createAlert(alert);
        return alert;
    }

    // Analytics and reporting
    getAlertMetrics() {
        const total = this.alerts.length;
        const active = this.alerts.filter(a => a.status !== "Resolved").length;
        const resolved = this.alerts.filter(a => a.status === "Resolved").length;
        const critical = this.alerts.filter(a => a.severity === "Critical" && a.status !== "Resolved").length;
        const high = this.alerts.filter(a => a.severity === "High" && a.status !== "Resolved").length;
        
        const avgResolutionTime = this.calculateAverageResolutionTime();
        const affectedGuidesCount = this.guideTags.size;
        
        return {
            total,
            active,
            resolved,
            critical,
            high,
            avgResolutionTime,
            affectedGuidesCount
        };
    }

    calculateAverageResolutionTime() {
        const resolvedAlerts = this.alerts.filter(a => a.resolvedAt);
        if (resolvedAlerts.length === 0) return 0;
        
        const totalTime = resolvedAlerts.reduce((sum, alert) => {
            return sum + (alert.resolvedAt - alert.createdAt);
        }, 0);
        
        return Math.round(totalTime / resolvedAlerts.length / (1000 * 60 * 60)); // Hours
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EWatchSystem;
}
