# JIRA to eWatch Alert Integration Guide

## Overview

This guide explains how the eWatch system automatically ingests JIRA tickets and converts them into structured alerts with comprehensive alert guides. The system provides a complete workflow from JIRA ticket detection to guide tagging and resolution tracking.

## Table of Contents

1. [JIRA Ticket Ingestion](#jira-ticket-ingestion)
2. [Alert Creation Process](#alert-creation-process)
3. [Alert Guide Generation](#alert-guide-generation)
4. [Guide Tagging System](#guide-tagging-system)
5. [Example: CNT-163414 Alert](#example-cnt-163414-alert)
6. [Manual Alert Creation](#manual-alert-creation)
7. [Alert Management](#alert-management)
8. [Best Practices](#best-practices)

## JIRA Ticket Ingestion

### Supported JIRA Ticket Formats

The eWatch system can process various JIRA ticket formats, including:

- **Standard eBay JIRA tickets** (EWATCHOP-XXXXXX)
- **Content Management tickets** (CNT-XXXXXX)
- **Custom project tickets** with proper labeling

### Required JIRA Fields

For optimal alert generation, JIRA tickets should include:

```json
{
  "key": "CNT-163414",
  "summary": "Content Management System - User Authentication Issues",
  "description": "Detailed description of the issue",
  "priority": "High|Medium|Low",
  "status": "Open|In Progress|Resolved",
  "reporter": "team@ebay.com",
  "labels": ["authentication", "content-management", "session"],
  "components": ["Content Management", "Authentication"],
  "environment": "Production|Staging|Development",
  "customFields": {
    "impactLevel": "High|Medium|Low",
    "userCount": "Number of affected users",
    "businessImpact": "Description of business impact"
  }
}
```

### Automatic Processing

The system polls JIRA every 30 seconds and automatically:

1. **Detects new tickets** matching configured filters
2. **Extracts key information** from ticket fields
3. **Analyzes content** to determine impact and affected systems
4. **Creates structured alerts** with proper categorization
5. **Generates alert guides** with resolution instructions
6. **Tags affected content guides** for immediate visibility

## Alert Creation Process

### 1. JIRA Ticket Analysis

When a new JIRA ticket is detected, the system:

- **Extracts metadata**: Priority, reporter, labels, components
- **Analyzes description**: Keywords, impact indicators, technical details
- **Determines severity**: Maps JIRA priority to alert severity levels
- **Identifies affected systems**: Based on labels and content analysis

### 2. Alert Structure Generation

Each alert includes:

```javascript
{
  id: "ALERT17202",
  jiraReference: "CNT-163414",
  title: "Content Management System - User Authentication Issues",
  severity: "High|Medium|Low|Critical",
  status: "New|Active|In Progress|Resolved",
  source: "System reports|Agent reports|Customer reports",
  dateDetected: "2025-09-23T15:00:00Z",
  description: "Detailed problem description",
  impact: "Business and user impact assessment",
  frequency: "How often the issue occurs",
  evidence: ["logs.txt", "screenshots.png"],
  environment: {
    location: "Where the issue occurs",
    category: "System category",
    policyLink: "Relevant policy documentation",
    channelImpact: ["Affected channels/systems"],
    referenceTables: "Related system components"
  },
  resolution: {
    teammateInstructions: "Instructions for support staff",
    customerInstructions: "Instructions for end users",
    guideUpdate: "Notice to add to affected guides"
  },
  governance: {
    proposedAction: "Recommended next steps",
    escalationPath: "Who to escalate to",
    governanceLevel: "Severity level",
    resolutionStatus: "Current resolution status"
  },
  affectedGuides: ["1", "2", "3"], // IDs of affected content guides
  tags: ["authentication", "cms", "session"],
  priority: "P1|P2|P3|P4",
  lifecycle: "New|Active|Resolved"
}
```

### 3. Intelligent Guide Matching

The system automatically identifies affected guides by:

- **Keyword matching**: Comparing JIRA labels with guide content
- **Content analysis**: Scanning guide text for relevant terms
- **Category mapping**: Matching system components to guide categories
- **Historical patterns**: Learning from previous alert-guide associations

## Alert Guide Generation

### Alert Guide Structure

Each alert automatically generates a comprehensive guide with:

1. **Alert Information**: ID, JIRA reference, severity, timeline
2. **Problem Description**: Detailed issue analysis and impact
3. **Environment Context**: Where and how the issue occurs
4. **Resolution Instructions**: Step-by-step guidance for different audiences
5. **Governance & Escalation**: Proper escalation paths and actions
6. **Technical Details**: Error patterns, affected systems, metrics
7. **Communication Templates**: Ready-to-use email and status updates

### Example Alert Guide Sections

#### 1. Alert Information
```html
<div class="alert-summary">
  <h2>1. Alert Information</h2>
  <ul>
    <li><strong>Alert ID / JIRA reference:</strong> ALERT17202 / CNT-163414</li>
    <li><strong>Source:</strong> System reports / Content Team</li>
    <li><strong>Date / time detected:</strong> 9/23/2025 15:00 UTC</li>
    <li><strong>Severity:</strong> High (P2 – business impact)</li>
    <li><strong>Lifecycle state:</strong> Active</li>
  </ul>
</div>
```

#### 2. Resolution Instructions
```html
<div class="teammate-instructions">
  <h3>For Teammates:</h3>
  <div class="instruction-box">
    Inform users about the authentication issue. Advise them to:
    <ul>
      <li>Clear browser cache and cookies</li>
      <li>Try incognito/private browsing mode</li>
      <li>Use alternative browsers</li>
      <li>Contact technical support for persistent issues</li>
    </ul>
  </div>
</div>
```

#### 3. Communication Templates
```html
<div class="template-section">
  <h3>Email Template for Affected Users:</h3>
  <div class="template-box">
    <strong>Subject:</strong> Content Management System - Authentication Issues (CNT-163414)
    
    Dear Content Team,
    
    We are currently experiencing authentication issues...
  </div>
</div>
```

## Guide Tagging System

### Automatic Guide Tagging

When an alert is created, the system:

1. **Identifies affected guides** using content analysis
2. **Adds alert notices** to guide headers
3. **Provides quick access** to alert details and guides
4. **Updates guide status** to show active alerts

### Alert Notice Display

Affected guides show alert notices like:

```html
<div class="alert-notice high">
  <div class="alert-notice-header">
    <i class="fas fa-exclamation-triangle"></i>
    <strong>ACTIVE ALERT: Content Management Authentication Issues</strong>
    <span class="alert-notice-id">ALERT17202</span>
  </div>
  <div class="alert-notice-content">
    ⚠️ KNOWN ISSUE: Content management system authentication may fail or timeout frequently. 
    Users may need to re-authenticate multiple times. Engineering is implementing a fix.
  </div>
  <div class="alert-notice-actions">
    <button class="btn btn-sm btn-outline view-alert-guide-btn">
      <i class="fas fa-book"></i> View Alert Guide
    </button>
    <button class="btn btn-sm btn-outline view-full-alert-btn">
      <i class="fas fa-external-link-alt"></i> View Full Alert
    </button>
  </div>
</div>
```

## Example: CNT-163414 Alert

### Original JIRA Ticket
```
Ticket: CNT-163414
Summary: Content Management System - User Authentication Issues
Priority: High
Description: Users experiencing authentication failures when accessing content management features. 
Multiple reports of login timeouts and session expiration issues affecting content editors and reviewers.
Labels: authentication, content-management, session, login, cms
Components: Content Management, Authentication, User Session
Environment: Production
```

### Generated Alert
- **Alert ID**: ALERT17202
- **Severity**: High (P2)
- **Impact**: 150+ affected users, content publishing delays
- **Affected Guides**: All content management guides (IDs 1-5)
- **Resolution Status**: In Progress
- **Expected Resolution**: 2-4 hours

### Alert Guide Features
- **Comprehensive troubleshooting steps** for users and support staff
- **Technical details** including error patterns and monitoring metrics
- **Communication templates** for user notifications and status updates
- **Workaround instructions** for urgent content needs
- **Escalation procedures** with clear ownership and timelines

## Manual Alert Creation

### Creating Manual Alerts

For urgent issues or testing, you can create manual alerts:

```javascript
// Example manual alert creation
const alertData = {
  jiraReference: "MANUAL-URGENT-001",
  title: "Critical System Outage",
  severity: "Critical",
  description: "Complete system outage affecting all users",
  impact: "All users unable to access platform",
  source: "Manual creation",
  tags: ["outage", "critical", "platform"],
  affectedGuides: ["1", "2", "3", "4", "5"]
};

eWatchSystem.createManualAlert(alertData);
```

### Manual Alert Benefits
- **Immediate response** to urgent issues
- **Testing alert workflows** and guide generation
- **Custom alert content** for specific scenarios
- **Training purposes** for support teams

## Alert Management

### Alert Lifecycle

1. **New**: Alert created from JIRA ticket
2. **Active**: Alert acknowledged and being worked on
3. **In Progress**: Resolution in progress
4. **Resolved**: Issue fixed and alert closed

### Alert Actions

- **View Alert Guide**: Access comprehensive resolution guide
- **Update Status**: Change alert lifecycle status
- **Add Comments**: Document progress and findings
- **Resolve Alert**: Mark as resolved with resolution details
- **Update Affected Guides**: Refresh guide tagging

### Metrics and Reporting

The system tracks:
- **Active alerts count**: Currently unresolved alerts
- **Resolution time**: Average time to resolve alerts
- **Affected guides**: Number of guides with active alerts
- **Alert severity distribution**: Breakdown by severity levels

## Best Practices

### For JIRA Ticket Creation

1. **Use descriptive summaries** that clearly identify the issue
2. **Include relevant labels** for proper categorization
3. **Provide detailed descriptions** with impact assessment
4. **Set appropriate priority levels** based on business impact
5. **Include reproduction steps** when applicable

### For Alert Management

1. **Review alerts promptly** when they're created
2. **Update alert status** as work progresses
3. **Document resolution steps** for future reference
4. **Verify guide updates** are accurate and helpful
5. **Close alerts promptly** when issues are resolved

### For Guide Maintenance

1. **Review alert notices** regularly for accuracy
2. **Update permanent guides** based on alert learnings
3. **Remove outdated alert notices** when issues are resolved
4. **Maintain guide quality** with clear, actionable content
5. **Test alert guide workflows** periodically

## Integration Points

### With Aira Platform
- **Automatic guide tagging** based on content analysis
- **Real-time notifications** for new alerts
- **Dashboard metrics** showing alert status
- **Content editor integration** with alert notices

### With JIRA
- **Automated ticket polling** every 30 seconds
- **Bidirectional status updates** (future enhancement)
- **Comment synchronization** (future enhancement)
- **Attachment processing** for evidence files

### With Support Systems
- **Alert guide sharing** via email and links
- **Printable guide formats** for offline use
- **Status page integration** for public communications
- **Escalation workflows** with proper routing

## Troubleshooting

### Common Issues

1. **Alerts not creating from JIRA**
   - Check JIRA connectivity and permissions
   - Verify ticket format and required fields
   - Review system logs for processing errors

2. **Incorrect guide tagging**
   - Review keyword matching algorithms
   - Update guide content analysis rules
   - Manually adjust affected guide lists

3. **Alert guide formatting issues**
   - Check HTML template syntax
   - Verify CSS styling is applied
   - Test guide rendering in different browsers

### Support Contacts

- **Technical Issues**: ewatch-support@ebay.com
- **Content Questions**: content-team@ebay.com
- **JIRA Integration**: jira-admin@ebay.com

---

*This guide is maintained by the eWatch team and updated regularly. Last updated: September 23, 2025*
