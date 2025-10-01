// Communications Alert System for eBay Policy and Feature Updates
class CommsAlertSystem {
    constructor(airaApp) {
        this.airaApp = airaApp;
        this.alerts = [];
        this.regions = ['Global', 'US', 'UK', 'AU', 'DE'];
        this.alertTypes = ['Policy Update', 'Feature Launch', 'System Change', 'Training Required'];
        this.priorities = ['Critical', 'High', 'Medium', 'Low'];
        this.init();
    }

    init() {
        this.loadInitialAlerts();
        this.initializeUI();
        this.startAlertMonitoring();
    }

    loadInitialAlerts() {
        // Load the comprehensive policy and feature updates
        this.alerts = [
            {
                id: 'COMM-001',
                title: 'Global – Policy Creation & Policy Name Change',
                type: 'Policy Update',
                priority: 'High',
                region: 'Global',
                status: 'Active',
                effectiveDate: new Date('2025-01-25'),
                createdAt: new Date(),
                description: 'Major policy updates including Product Safety Policy renaming and new policy additions',
                actionItems: [
                    'Update CMS and Help Center references',
                    'Rename Product Safety Policy → Product Safety Recalled Item Policy (L3 5827)',
                    'Rename L5 recalled and other unsafe items → Recalled and Published Unsafe Items (L5 5828)',
                    'Add new policies: Product Safety General Unsafe (L3 9513 / L5 9514)',
                    'Add new policies: Product Safety Standards (L3 9553)',
                    'Ensure GUIDE1867 – General Product Safety Regulation reflects updates',
                    'Confirm enforcement/consequence guidelines remain unchanged'
                ],
                affectedGuides: ['GUIDE1867', 'L3-5827', 'L5-5828', 'L3-9513', 'L5-9514', 'L3-9553'],
                teams: ['Policy Team', 'Content Management', 'Customer Service', 'Legal'],
                tags: ['policy-update', 'product-safety', 'global', 'cms-update']
            },
            {
                id: 'COMM-002',
                title: 'Global – iOS Live Activity Feature for eBay Auctions',
                type: 'Feature Launch',
                priority: 'Medium',
                region: 'Global',
                status: 'Active',
                effectiveDate: new Date('2025-01-30'),
                createdAt: new Date(),
                description: 'New iOS Live Activity feature providing real-time auction notifications on lock screen',
                actionItems: [
                    'Update GUIDE1473 (eBay app for iOS & Android) with functionality description',
                    'Add instructions for opt-in/out (Settings > Apps > eBay > toggle "Live Activities")',
                    'Document dismissal method (swipe left + clear)',
                    'Add screenshots/demos to training and CSKB',
                    'Train support to handle buyer queries on Live Activities'
                ],
                affectedGuides: ['GUIDE1473'],
                teams: ['Mobile Team', 'Customer Service', 'Training Team'],
                tags: ['feature-launch', 'ios', 'live-activity', 'auctions', 'mobile']
            },
            {
                id: 'COMM-003',
                title: 'US – Denial Emails for Sellers Applying to eBay Live',
                type: 'System Change',
                priority: 'Medium',
                region: 'US',
                status: 'Active',
                effectiveDate: new Date('2025-02-01'),
                createdAt: new Date(),
                description: 'Automated denial email system for eBay Live seller applications',
                actionItems: [
                    'Automate denial emails for sellers not approved for eBay Live',
                    'Update GUIDE1823 (eBay Live) with talking points explaining "invite-only" status',
                    'Add clarification that there is no appeal, but sellers can reapply later',
                    'Upload sample denial emails into teammate reference library'
                ],
                affectedGuides: ['GUIDE1823'],
                teams: ['eBay Live Team', 'Seller Support', 'Email Systems'],
                tags: ['ebay-live', 'denial-emails', 'automation', 'us-only']
            },
            {
                id: 'COMM-004',
                title: 'US – Promoted Offsite Suggested Campaigns',
                type: 'Feature Launch',
                priority: 'Medium',
                region: 'US',
                status: 'Active',
                effectiveDate: new Date('2025-02-05'),
                createdAt: new Date(),
                description: 'New suggested campaigns feature for Promoted Offsite advertising',
                actionItems: [
                    'Update GUIDE1830 (Promoted Offsite) with eligibility rules',
                    'Document campaign refresh rules (daily rotation, full eligible inventory)',
                    'Add seller options (accept, skip, dismiss)',
                    'Add CSKB article with FAQs for Seller Help',
                    'Ensure Help Page includes screenshots of campaign cards'
                ],
                affectedGuides: ['GUIDE1830'],
                teams: ['Advertising Team', 'Seller Support', 'Help Content'],
                tags: ['promoted-offsite', 'suggested-campaigns', 'advertising', 'us-only']
            },
            {
                id: 'COMM-005',
                title: 'Multi-Region – Seller Help Multi-Submit for B2C Sellers',
                type: 'Feature Launch',
                priority: 'High',
                region: 'US, UK, AU, DE',
                status: 'Active',
                effectiveDate: new Date('2025-02-10'),
                createdAt: new Date(),
                description: 'New multi-submit feature for Seller Help 2.0 allowing up to 5 requests per submission',
                actionItems: [
                    'Update GUIDE1745 (Seller Help 2.0) with new "Select multiple" option',
                    'Clarify desktop only, up to 5 requests per submission',
                    'Note: mobile remains single-submit',
                    'Document that each request still generates an individual SR',
                    'Train Seller Help teammates: process remains one-by-one handling'
                ],
                affectedGuides: ['GUIDE1745'],
                teams: ['Seller Help Team', 'Customer Service', 'Training Team'],
                tags: ['seller-help', 'multi-submit', 'b2c', 'desktop-only']
            },
            {
                id: 'COMM-006',
                title: 'UK & DE – GPSR Webinterpret Email Campaign',
                type: 'System Change',
                priority: 'High',
                region: 'UK, DE',
                status: 'Active',
                effectiveDate: new Date('2025-02-15'),
                createdAt: new Date(),
                description: 'GPSR Webinterpret email campaign pilot for UK and DE markets',
                actionItems: [
                    'Add campaign details to GUIDE1867 (General Product Safety Regulation)',
                    'Create LiveArticle for GPSR Webinterpret Campaign Pilot',
                    'Include escalation guidance: direct sellers to Webinterpret Help Center/live chat',
                    'Load sample outreach emails into teammate library'
                ],
                affectedGuides: ['GUIDE1867'],
                teams: ['Policy Team', 'International Team', 'Email Marketing'],
                tags: ['gpsr', 'webinterpret', 'email-campaign', 'uk-de']
            },
            {
                id: 'COMM-007',
                title: 'DE – Feedback Policy Updates',
                type: 'Policy Update',
                priority: 'Critical',
                region: 'DE',
                status: 'Active',
                effectiveDate: new Date('2025-11-03'),
                createdAt: new Date(),
                description: 'Major feedback policy changes effective November 3rd',
                actionItems: [
                    'Update policies effective Nov 3: Automated positive feedback (no 10-feedback cap)',
                    'Policy change: no removal of feedback in cases where sellers deduct for used/damaged returns',
                    'Update GUIDE1076 – Feedback: Basic Process (Nov 3)',
                    'Update GUIDE1852 – Feedback Policy (Nov 3)',
                    'Update LIVE2352 – Updates to Feedback (available Oct 1)',
                    'Train GCX to direct sellers to Seller News Page FAQs'
                ],
                affectedGuides: ['GUIDE1076', 'GUIDE1852', 'LIVE2352'],
                teams: ['Policy Team', 'Feedback Team', 'GCX Team'],
                tags: ['feedback-policy', 'automated-feedback', 'germany', 'critical']
            },
            {
                id: 'COMM-008',
                title: 'US – Texas Tax Fee Change',
                type: 'System Change',
                priority: 'Medium',
                region: 'US',
                status: 'Scheduled',
                effectiveDate: new Date('2025-10-01'),
                createdAt: new Date(),
                description: 'Texas tax fee changes with October timing',
                actionItems: [
                    'Update GUIDE1671 with Seller News timing (Oct)'
                ],
                affectedGuides: ['GUIDE1671'],
                teams: ['Tax Team', 'Seller Support'],
                tags: ['tax-fee', 'texas', 'seller-news']
            },
            {
                id: 'COMM-009',
                title: 'UK – Optional AG for Clothing',
                type: 'Feature Launch',
                priority: 'Low',
                region: 'UK',
                status: 'Delayed',
                effectiveDate: new Date('2025-10-01'),
                createdAt: new Date(),
                description: 'Optional AG for clothing with delayed start date',
                actionItems: [
                    'Delay start date → Oct 1',
                    'Update GUIDE1730'
                ],
                affectedGuides: ['GUIDE1730'],
                teams: ['UK Team', 'Clothing Category'],
                tags: ['optional-ag', 'clothing', 'uk', 'delayed']
            },
            {
                id: 'COMM-010',
                title: 'US – Seller Costs on Hold',
                type: 'System Change',
                priority: 'High',
                region: 'US',
                status: 'Paused',
                effectiveDate: null,
                createdAt: new Date(),
                description: 'Seller costs changes have been paused',
                actionItems: [
                    'Pause announced changes',
                    'Update GUIDE1751'
                ],
                affectedGuides: ['GUIDE1751'],
                teams: ['Seller Costs Team', 'Finance Team'],
                tags: ['seller-costs', 'paused', 'us']
            }
        ];
    }

    initializeUI() {
        this.createCommsAlertView();
        this.addCommsNavigationItem();
        this.initializeCommsEventListeners();
    }

    createCommsAlertView() {
        // Check if view already exists
        if (document.getElementById('comms-alerts-view')) return;

        const mainContent = document.querySelector('.main-content');
        if (!mainContent) return;

        const commsView = document.createElement('div');
        commsView.id = 'comms-alerts-view';
        commsView.className = 'view';
        commsView.innerHTML = `
            <div class="view-header">
                <div class="header-content">
                    <div class="header-title">
                        <h1>Communications Alerts</h1>
                        <p>Policy updates, feature launches, and system changes across all regions</p>
                    </div>
                    <div class="header-actions">
                        <button class="btn btn-outline filter-alerts-btn">
                            <i class="fas fa-filter"></i>
                            Filter Alerts
                        </button>
                        <button class="btn btn-primary create-alert-btn">
                            <i class="fas fa-plus"></i>
                            Create Alert
                        </button>
                    </div>
                </div>
            </div>

            <div class="comms-dashboard">
                <div class="comms-metrics">
                    <div class="metric-card">
                        <div class="metric-icon critical">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="metric-content">
                            <div class="metric-value" id="critical-alerts-count">1</div>
                            <div class="metric-label">Critical Alerts</div>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon high">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <div class="metric-content">
                            <div class="metric-value" id="high-alerts-count">3</div>
                            <div class="metric-label">High Priority</div>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon active">
                            <i class="fas fa-bell"></i>
                        </div>
                        <div class="metric-content">
                            <div class="metric-value" id="active-alerts-count">8</div>
                            <div class="metric-label">Active Alerts</div>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon guides">
                            <i class="fas fa-book"></i>
                        </div>
                        <div class="metric-content">
                            <div class="metric-value" id="affected-guides-count">15</div>
                            <div class="metric-label">Affected Guides</div>
                        </div>
                    </div>
                </div>

                <div class="comms-filters">
                    <div class="filter-group">
                        <label>Region:</label>
                        <select id="region-filter">
                            <option value="">All Regions</option>
                            <option value="Global">Global</option>
                            <option value="US">US</option>
                            <option value="UK">UK</option>
                            <option value="AU">AU</option>
                            <option value="DE">DE</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Type:</label>
                        <select id="type-filter">
                            <option value="">All Types</option>
                            <option value="Policy Update">Policy Update</option>
                            <option value="Feature Launch">Feature Launch</option>
                            <option value="System Change">System Change</option>
                            <option value="Training Required">Training Required</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Priority:</label>
                        <select id="priority-filter">
                            <option value="">All Priorities</option>
                            <option value="Critical">Critical</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Status:</label>
                        <select id="status-filter">
                            <option value="">All Statuses</option>
                            <option value="Active">Active</option>
                            <option value="Scheduled">Scheduled</option>
                            <option value="Delayed">Delayed</option>
                            <option value="Paused">Paused</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>

                <div class="comms-alerts-list" id="comms-alerts-list">
                    <!-- Alerts will be rendered here -->
                </div>
            </div>
        `;

        mainContent.appendChild(commsView);
    }

    addCommsNavigationItem() {
        const nav = document.querySelector('.nav-links');
        if (!nav) return;

        // Check if already exists
        if (document.querySelector('[data-view="comms-alerts"]')) return;

        const commsNavItem = document.createElement('a');
        commsNavItem.href = '#';
        commsNavItem.className = 'nav-link';
        commsNavItem.setAttribute('data-view', 'comms-alerts');
        commsNavItem.innerHTML = `
            <i class="fas fa-bullhorn"></i>
            <span>Comms Alerts</span>
            <span class="nav-badge" id="comms-alert-badge">10</span>
        `;

        // Insert before the last nav item (or at the end)
        nav.appendChild(commsNavItem);

        // Add click event listener
        commsNavItem.addEventListener('click', (e) => {
            e.preventDefault();
            this.airaApp.switchView('comms-alerts');
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            commsNavItem.classList.add('active');
        });
    }

    initializeCommsEventListeners() {
        // Filter change listeners
        const filters = ['region-filter', 'type-filter', 'priority-filter', 'status-filter'];
        filters.forEach(filterId => {
            const filter = document.getElementById(filterId);
            if (filter) {
                filter.addEventListener('change', () => this.applyFilters());
            }
        });

        // Create alert button
        const createAlertBtn = document.querySelector('.create-alert-btn');
        if (createAlertBtn) {
            createAlertBtn.addEventListener('click', () => this.showCreateAlertModal());
        }

        // Filter alerts button
        const filterAlertsBtn = document.querySelector('.filter-alerts-btn');
        if (filterAlertsBtn) {
            filterAlertsBtn.addEventListener('click', () => this.toggleFilters());
        }
    }

    renderAlerts(alertsToRender = null) {
        const alertsList = document.getElementById('comms-alerts-list');
        if (!alertsList) return;

        const alerts = alertsToRender || this.alerts;

        if (alerts.length === 0) {
            alertsList.innerHTML = `
                <div class="no-alerts-message">
                    <i class="fas fa-bullhorn"></i>
                    <h3>No Communications Alerts</h3>
                    <p>No alerts match your current filter criteria.</p>
                </div>
            `;
            return;
        }

        alertsList.innerHTML = alerts.map(alert => this.renderAlertCard(alert)).join('');
        this.initializeAlertCardActions();
    }

    renderAlertCard(alert) {
        const priorityClass = alert.priority.toLowerCase();
        const statusClass = alert.status.toLowerCase();
        const effectiveDate = alert.effectiveDate ? this.formatDate(alert.effectiveDate) : 'TBD';
        const timeAgo = this.getTimeAgo(alert.createdAt);

        return `
            <div class="comms-alert-card ${priorityClass}" data-alert-id="${alert.id}">
                <div class="alert-card-header">
                    <div class="alert-title-section">
                        <div class="alert-badges">
                            <span class="priority-badge ${priorityClass}">${alert.priority}</span>
                            <span class="type-badge">${alert.type}</span>
                            <span class="region-badge">${alert.region}</span>
                            <span class="status-badge ${statusClass}">${alert.status}</span>
                        </div>
                        <h3 class="alert-title">${alert.title}</h3>
                        <div class="alert-meta">
                            <span class="alert-id">${alert.id}</span>
                            <span class="effective-date">Effective: ${effectiveDate}</span>
                            <span class="created-time">${timeAgo}</span>
                        </div>
                    </div>
                    <div class="alert-actions-quick">
                        <button class="btn btn-sm btn-outline expand-alert-btn" title="Expand Details">
                            <i class="fas fa-chevron-down"></i>
                        </button>
                    </div>
                </div>

                <div class="alert-card-body collapsed">
                    <div class="alert-description">
                        <p>${alert.description}</p>
                    </div>

                    <div class="action-items-section">
                        <h4>Action Items:</h4>
                        <ul class="action-items-list">
                            ${alert.actionItems.map(item => `
                                <li class="action-item">
                                    <input type="checkbox" class="action-checkbox" id="action-${alert.id}-${alert.actionItems.indexOf(item)}">
                                    <label for="action-${alert.id}-${alert.actionItems.indexOf(item)}">${item}</label>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="alert-details-grid">
                        <div class="detail-section">
                            <h5>Affected Guides</h5>
                            <div class="guide-tags">
                                ${alert.affectedGuides.map(guide => `<span class="guide-tag">${guide}</span>`).join('')}
                            </div>
                        </div>

                        <div class="detail-section">
                            <h5>Responsible Teams</h5>
                            <div class="team-tags">
                                ${alert.teams.map(team => `<span class="team-tag">${team}</span>`).join('')}
                            </div>
                        </div>

                        <div class="detail-section">
                            <h5>Tags</h5>
                            <div class="alert-tags">
                                ${alert.tags.map(tag => `<span class="alert-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="alert-card-actions">
                        <button class="btn btn-sm btn-outline view-details-btn" data-alert-id="${alert.id}">
                            <i class="fas fa-eye"></i>
                            View Full Details
                        </button>
                        <button class="btn btn-sm btn-outline update-guides-btn" data-alert-id="${alert.id}">
                            <i class="fas fa-sync"></i>
                            Update Guides
                        </button>
                        <button class="btn btn-sm btn-outline export-alert-btn" data-alert-id="${alert.id}">
                            <i class="fas fa-download"></i>
                            Export
                        </button>
                        <button class="btn btn-sm btn-primary mark-complete-btn" data-alert-id="${alert.id}">
                            <i class="fas fa-check"></i>
                            Mark Complete
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    initializeAlertCardActions() {
        // Expand/collapse alerts
        const expandBtns = document.querySelectorAll('.expand-alert-btn');
        expandBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const alertCard = e.target.closest('.comms-alert-card');
                const alertBody = alertCard.querySelector('.alert-card-body');
                const icon = btn.querySelector('i');
                
                if (alertBody.classList.contains('collapsed')) {
                    alertBody.classList.remove('collapsed');
                    icon.className = 'fas fa-chevron-up';
                } else {
                    alertBody.classList.add('collapsed');
                    icon.className = 'fas fa-chevron-down';
                }
            });
        });

        // View details buttons
        const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
        viewDetailsBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const alertId = e.target.closest('[data-alert-id]').getAttribute('data-alert-id');
                this.showAlertDetailsModal(alertId);
            });
        });

        // Update guides buttons
        const updateGuidesBtns = document.querySelectorAll('.update-guides-btn');
        updateGuidesBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const alertId = e.target.closest('[data-alert-id]').getAttribute('data-alert-id');
                this.updateAffectedGuides(alertId);
            });
        });

        // Export alert buttons
        const exportBtns = document.querySelectorAll('.export-alert-btn');
        exportBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const alertId = e.target.closest('[data-alert-id]').getAttribute('data-alert-id');
                this.exportAlert(alertId);
            });
        });

        // Mark complete buttons
        const completeBtns = document.querySelectorAll('.mark-complete-btn');
        completeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const alertId = e.target.closest('[data-alert-id]').getAttribute('data-alert-id');
                this.markAlertComplete(alertId);
            });
        });

        // Action item checkboxes
        const actionCheckboxes = document.querySelectorAll('.action-checkbox');
        actionCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.updateActionItemStatus(e.target);
            });
        });
    }

    applyFilters() {
        const regionFilter = document.getElementById('region-filter')?.value || '';
        const typeFilter = document.getElementById('type-filter')?.value || '';
        const priorityFilter = document.getElementById('priority-filter')?.value || '';
        const statusFilter = document.getElementById('status-filter')?.value || '';

        let filteredAlerts = this.alerts.filter(alert => {
            return (!regionFilter || alert.region.includes(regionFilter)) &&
                   (!typeFilter || alert.type === typeFilter) &&
                   (!priorityFilter || alert.priority === priorityFilter) &&
                   (!statusFilter || alert.status === statusFilter);
        });

        this.renderAlerts(filteredAlerts);
        this.updateMetrics(filteredAlerts);
    }

    updateMetrics(alerts = null) {
        const alertsToCount = alerts || this.alerts;
        
        const criticalCount = alertsToCount.filter(a => a.priority === 'Critical').length;
        const highCount = alertsToCount.filter(a => a.priority === 'High').length;
        const activeCount = alertsToCount.filter(a => a.status === 'Active').length;
        const affectedGuidesCount = new Set(alertsToCount.flatMap(a => a.affectedGuides)).size;

        const criticalElement = document.getElementById('critical-alerts-count');
        const highElement = document.getElementById('high-alerts-count');
        const activeElement = document.getElementById('active-alerts-count');
        const guidesElement = document.getElementById('affected-guides-count');

        if (criticalElement) criticalElement.textContent = criticalCount;
        if (highElement) highElement.textContent = highCount;
        if (activeElement) activeElement.textContent = activeCount;
        if (guidesElement) guidesElement.textContent = affectedGuidesCount;

        // Update navigation badge
        const navBadge = document.getElementById('comms-alert-badge');
        if (navBadge) {
            navBadge.textContent = activeCount;
        }
    }

    showAlertDetailsModal(alertId) {
        const alert = this.alerts.find(a => a.id === alertId);
        if (!alert) return;

        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.id = 'alert-details-modal';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <div class="alert-header-info">
                        <h2>${alert.title}</h2>
                        <div class="alert-badges">
                            <span class="priority-badge ${alert.priority.toLowerCase()}">${alert.priority}</span>
                            <span class="type-badge">${alert.type}</span>
                            <span class="region-badge">${alert.region}</span>
                            <span class="status-badge ${alert.status.toLowerCase()}">${alert.status}</span>
                        </div>
                    </div>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="alert-details-content">
                        <div class="detail-section">
                            <h3>Description</h3>
                            <p>${alert.description}</p>
                        </div>

                        <div class="detail-section">
                            <h3>Action Items</h3>
                            <div class="action-items-detailed">
                                ${alert.actionItems.map((item, index) => `
                                    <div class="action-item-detailed">
                                        <input type="checkbox" id="modal-action-${index}">
                                        <label for="modal-action-${index}">${item}</label>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="detail-section">
                            <h3>Timeline</h3>
                            <div class="timeline-info">
                                <div class="timeline-item">
                                    <strong>Created:</strong> ${this.formatDate(alert.createdAt)}
                                </div>
                                <div class="timeline-item">
                                    <strong>Effective Date:</strong> ${alert.effectiveDate ? this.formatDate(alert.effectiveDate) : 'TBD'}
                                </div>
                            </div>
                        </div>

                        <div class="detail-section">
                            <h3>Affected Resources</h3>
                            <div class="resources-grid">
                                <div class="resource-group">
                                    <h4>Guides</h4>
                                    <div class="guide-tags">
                                        ${alert.affectedGuides.map(guide => `<span class="guide-tag">${guide}</span>`).join('')}
                                    </div>
                                </div>
                                <div class="resource-group">
                                    <h4>Teams</h4>
                                    <div class="team-tags">
                                        ${alert.teams.map(team => `<span class="team-tag">${team}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary close-modal-btn">Close</button>
                    <button class="btn btn-outline export-detailed-btn" data-alert-id="${alert.id}">
                        <i class="fas fa-download"></i>
                        Export Details
                    </button>
                    <button class="btn btn-primary update-alert-btn" data-alert-id="${alert.id}">
                        <i class="fas fa-edit"></i>
                        Update Alert
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Initialize modal event listeners
        const closeBtn = modal.querySelector('.modal-close');
        const closeModalBtn = modal.querySelector('.close-modal-btn');
        [closeBtn, closeModalBtn].forEach(btn => {
            btn.addEventListener('click', () => modal.remove());
        });

        const exportBtn = modal.querySelector('.export-detailed-btn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                this.exportAlert(alertId);
                modal.remove();
            });
        }

        const updateBtn = modal.querySelector('.update-alert-btn');
        if (updateBtn) {
            updateBtn.addEventListener('click', () => {
                this.showUpdateAlertModal(alertId);
                modal.remove();
            });
        }
    }

    updateAffectedGuides(alertId) {
        const alert = this.alerts.find(a => a.id === alertId);
        if (!alert) return;

        this.airaApp.showNotification(`Updating ${alert.affectedGuides.length} affected guides...`, 'info');
        
        setTimeout(() => {
            this.airaApp.showNotification(`Successfully updated guides: ${alert.affectedGuides.join(', ')}`, 'success');
        }, 2000);
    }

    exportAlert(alertId) {
        const alert = this.alerts.find(a => a.id === alertId);
        if (!alert) return;

        const exportData = {
            ...alert,
            exportedAt: new Date().toISOString(),
            exportedBy: 'Current User'
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `comms-alert-${alert.id}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        this.airaApp.showNotification(`Alert ${alert.id} exported successfully`, 'success');
    }

    markAlertComplete(alertId) {
        const alertIndex = this.alerts.findIndex(a => a.id === alertId);
        if (alertIndex === -1) return;

        if (confirm('Mark this alert as complete? This action cannot be undone.')) {
            this.alerts[alertIndex].status = 'Completed';
            this.alerts[alertIndex].completedAt = new Date();
            
            this.renderAlerts();
            this.updateMetrics();
            this.airaApp.showNotification('Alert marked as complete', 'success');
        }
    }

    updateActionItemStatus(checkbox) {
        const isChecked = checkbox.checked;
        const label = checkbox.nextElementSibling;
        
        if (isChecked) {
            label.style.textDecoration = 'line-through';
            label.style.opacity = '0.6';
        } else {
            label.style.textDecoration = 'none';
            label.style.opacity = '1';
        }
    }

    showCreateAlertModal() {
        this.airaApp.showNotification('Create Alert feature coming soon!', 'info');
    }

    toggleFilters() {
        const filtersSection = document.querySelector('.comms-filters');
        if (filtersSection) {
            filtersSection.style.display = filtersSection.style.display === 'none' ? 'flex' : 'none';
        }
    }

    formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    getTimeAgo(date) {
        const now = new Date();
        const diffMs = now - new Date(date);
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);
        
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        return `${diffDays}d ago`;
    }

    startAlertMonitoring() {
        // Simulate real-time alert updates
        setInterval(() => {
            this.updateMetrics();
        }, 30000); // Update every 30 seconds
    }

    // Public method to initialize the system
    static initialize(airaApp) {
        return new CommsAlertSystem(airaApp);
    }
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CommsAlertSystem;
} else if (typeof window !== 'undefined') {
    window.CommsAlertSystem = CommsAlertSystem;
}
