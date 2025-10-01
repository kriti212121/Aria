// Workflow Templates and Content Management System
class WorkflowTemplateManager {
    constructor() {
        this.templates = this.initializeTemplates();
        this.guides = this.initializeGuides();
        this.contentStates = ['pending', 'draft', 'review', 'approved', 'published', 'archived'];
        this.versioningEnabled = true;
        
        this.init();
    }

    init() {
        this.initializeTemplateManagement();
        this.initializeGuideManagement();
        this.initializeVersioning();
        this.initializeContentStates();
    }

    // Initialize workflow templates
    initializeTemplates() {
        return [
            {
                id: 'policy-guide-template',
                name: 'Policy Guide Template',
                description: 'Template for creating policy and compliance guides',
                category: 'policy',
                workflow: 'serial',
                sections: [
                    {
                        id: 'overview',
                        title: 'Overview',
                        modules: [
                            { id: 'policy-summary', title: 'Policy Summary', required: true },
                            { id: 'what-covers', title: 'What this policy covers', required: true },
                            { id: 'why-policy', title: 'Why we have this policy', required: true }
                        ]
                    },
                    {
                        id: 'not-allowed',
                        title: "What's not allowed",
                        modules: [
                            { id: 'prohibited-items', title: 'Prohibited items', required: true },
                            { id: 'prohibited-content', title: 'Prohibited content categories', required: false }
                        ]
                    },
                    {
                        id: 'allowed',
                        title: "What's allowed",
                        modules: [
                            { id: 'allowed-examples', title: 'Examples of allowed materials', required: true },
                            { id: 'exceptions', title: 'Exceptions', required: false }
                        ]
                    },
                    {
                        id: 'country-rules',
                        title: 'Country-specific rules',
                        modules: [
                            { id: 'general-guidelines', title: 'General guidelines', required: false },
                            { id: 'specific-restrictions', title: 'Specific restrictions', required: false }
                        ]
                    },
                    {
                        id: 'enforcement',
                        title: 'Internal enforcement guide',
                        modules: [
                            { id: 'consequences', title: 'Consequences', required: true },
                            { id: 'removal-examples', title: 'Removal examples', required: true },
                            { id: 'exception-examples', title: 'Exception examples', required: false }
                        ]
                    },
                    {
                        id: 'escalations',
                        title: 'Escalations & appeals',
                        modules: [
                            { id: 'policy-downgrade', title: 'Policy downgrade and exemptions', required: true }
                        ]
                    }
                ],
                approvers: [
                    { role: 'legal', required: true, order: 1 },
                    { role: 'policy', required: true, order: 2 },
                    { role: 'enforcement', required: true, order: 3 }
                ],
                metadata: {
                    estimatedTime: '2-3 weeks',
                    complexity: 'high',
                    tags: ['policy', 'compliance', 'enforcement']
                }
            },
            {
                id: 'help-article-template',
                name: 'Help Article Template',
                description: 'Template for creating user help articles',
                category: 'help',
                workflow: 'parallel',
                sections: [
                    {
                        id: 'introduction',
                        title: 'Introduction',
                        modules: [
                            { id: 'title', title: 'Article Title', required: true },
                            { id: 'overview', title: 'Overview', required: true },
                            { id: 'prerequisites', title: 'Prerequisites', required: false }
                        ]
                    },
                    {
                        id: 'main-content',
                        title: 'Main Content',
                        modules: [
                            { id: 'step-by-step', title: 'Step-by-step instructions', required: true },
                            { id: 'examples', title: 'Examples', required: false },
                            { id: 'troubleshooting', title: 'Troubleshooting', required: false }
                        ]
                    },
                    {
                        id: 'additional-info',
                        title: 'Additional Information',
                        modules: [
                            { id: 'related-articles', title: 'Related articles', required: false },
                            { id: 'contact-support', title: 'Contact support', required: false }
                        ]
                    }
                ],
                approvers: [
                    { role: 'content', required: true, order: 1 },
                    { role: 'ux', required: true, order: 1 },
                    { role: 'legal', required: false, order: 2 }
                ],
                metadata: {
                    estimatedTime: '3-5 days',
                    complexity: 'medium',
                    tags: ['help', 'user-guide', 'support']
                }
            },
            {
                id: 'enforcement-guide-template',
                name: 'Enforcement Guide Template',
                description: 'Template for creating enforcement and consequence guides',
                category: 'enforcement',
                workflow: 'serial',
                sections: [
                    {
                        id: 'overview',
                        title: 'Overview',
                        modules: [
                            { id: 'guide-summary', title: 'Guide Summary', required: true },
                            { id: 'scope', title: 'Scope and Application', required: true }
                        ]
                    },
                    {
                        id: 'consequence-path',
                        title: 'Consequence Path',
                        modules: [
                            { id: 'violation-levels', title: 'Violation Levels', required: true },
                            { id: 'escalation-matrix', title: 'Escalation Matrix', required: true },
                            { id: 'grace-periods', title: 'Grace Periods', required: true }
                        ]
                    },
                    {
                        id: 'enforcement-guide',
                        title: 'Enforcement Guide',
                        modules: [
                            { id: 'guidelines', title: 'Guidelines', required: true },
                            { id: 'examples', title: 'Examples', required: true },
                            { id: 'special-cases', title: 'Special Cases', required: false }
                        ]
                    },
                    {
                        id: 'reference-tables',
                        title: 'Reference Tables',
                        modules: [
                            { id: 'consequence-matrix', title: 'Consequence Matrix', required: true },
                            { id: 'policy-mapping', title: 'Policy Mapping', required: false }
                        ]
                    }
                ],
                approvers: [
                    { role: 'enforcement', required: true, order: 1 },
                    { role: 'legal', required: true, order: 2 },
                    { role: 'policy', required: true, order: 3 }
                ],
                metadata: {
                    estimatedTime: '1-2 weeks',
                    complexity: 'high',
                    tags: ['enforcement', 'consequences', 'violations']
                }
            }
        ];
    }

    // Initialize guides based on provided documents
    initializeGuides() {
        return [
            {
                id: 'guide-1195',
                title: 'GUIDE1195: Knives Policy - Prohibited and Restricted Items',
                category: 'policy',
                status: 'published',
                version: 1,
                versions: [
                    {
                        version: 1,
                        content: this.getKnivesPolicyContent(),
                        author: 'Policy Team',
                        timestamp: new Date('2025-01-15T10:00:00Z'),
                        changes: ['Initial publication'],
                        status: 'published'
                    }
                ],
                metadata: {
                    author: 'Policy Team',
                    createdAt: new Date('2025-01-15T10:00:00Z'),
                    lastModified: new Date('2025-01-15T10:00:00Z'),
                    publishedAt: new Date('2025-01-15T10:00:00Z'),
                    wordCount: 2450,
                    readingTime: 12,
                    tags: ['knives', 'policy', 'prohibited', 'weapons'],
                    audience: ['customers', 'teammates', 'enforcement'],
                    type: 'Informational'
                },
                template: 'policy-guide-template',
                workflow: {
                    type: 'serial',
                    currentStep: 'published',
                    approvers: [
                        { role: 'legal', status: 'approved', approvedAt: new Date('2025-01-14T15:00:00Z') },
                        { role: 'policy', status: 'approved', approvedAt: new Date('2025-01-14T16:00:00Z') },
                        { role: 'enforcement', status: 'approved', approvedAt: new Date('2025-01-15T09:00:00Z') }
                    ]
                }
            },
            {
                id: 'guide-1210',
                title: 'GUIDE1210: Data table for unapproved drugs in the United States',
                category: 'policy',
                status: 'published',
                version: 1,
                versions: [
                    {
                        version: 1,
                        content: this.getUnapprovedDrugsContent(),
                        author: 'Medical Policy Team',
                        timestamp: new Date('2025-01-10T14:00:00Z'),
                        changes: ['Initial data compilation'],
                        status: 'published'
                    }
                ],
                metadata: {
                    author: 'Medical Policy Team',
                    createdAt: new Date('2025-01-10T14:00:00Z'),
                    lastModified: new Date('2025-01-10T14:00:00Z'),
                    publishedAt: new Date('2025-01-10T14:00:00Z'),
                    wordCount: 1200,
                    readingTime: 6,
                    tags: ['drugs', 'medical', 'prohibited', 'FDA'],
                    audience: ['enforcement', 'policy'],
                    type: 'Reference Data'
                },
                template: 'policy-guide-template',
                workflow: {
                    type: 'parallel',
                    currentStep: 'published',
                    approvers: [
                        { role: 'medical', status: 'approved', approvedAt: new Date('2025-01-09T16:00:00Z') },
                        { role: 'legal', status: 'approved', approvedAt: new Date('2025-01-09T17:00:00Z') },
                        { role: 'policy', status: 'approved', approvedAt: new Date('2025-01-10T10:00:00Z') }
                    ]
                }
            },
            {
                id: 'guide-1096',
                title: 'GUIDE1096: Glorifying Hatred - Offensive Materials Policy',
                category: 'policy',
                status: 'published',
                version: 2,
                versions: [
                    {
                        version: 1,
                        content: 'Initial version of offensive materials policy...',
                        author: 'Policy Team',
                        timestamp: new Date('2024-12-01T10:00:00Z'),
                        changes: ['Initial publication'],
                        status: 'published'
                    },
                    {
                        version: 2,
                        content: this.getOffensiveMaterialsContent(),
                        author: 'Policy Team',
                        timestamp: new Date('2025-01-20T11:00:00Z'),
                        changes: ['Updated enforcement examples', 'Added new prohibited items', 'Enhanced visual guide'],
                        status: 'published'
                    }
                ],
                metadata: {
                    author: 'Policy Team',
                    createdAt: new Date('2024-12-01T10:00:00Z'),
                    lastModified: new Date('2025-01-20T11:00:00Z'),
                    publishedAt: new Date('2025-01-20T11:00:00Z'),
                    wordCount: 3200,
                    readingTime: 16,
                    tags: ['offensive', 'hatred', 'prohibited', 'enforcement'],
                    audience: ['enforcement', 'policy', 'legal'],
                    type: 'Policy'
                },
                template: 'policy-guide-template',
                workflow: {
                    type: 'serial',
                    currentStep: 'published',
                    approvers: [
                        { role: 'legal', status: 'approved', approvedAt: new Date('2025-01-19T15:00:00Z') },
                        { role: 'policy', status: 'approved', approvedAt: new Date('2025-01-19T16:00:00Z') },
                        { role: 'enforcement', status: 'approved', approvedAt: new Date('2025-01-20T09:00:00Z') }
                    ]
                }
            },
            {
                id: 'guide-1120',
                title: 'GUIDE1120: Unified Consequences Path - Trust Policies',
                category: 'enforcement',
                status: 'published',
                version: 1,
                versions: [
                    {
                        version: 1,
                        content: this.getUnifiedConsequencesContent(),
                        author: 'Enforcement Team',
                        timestamp: new Date('2025-01-12T09:00:00Z'),
                        changes: ['Initial enforcement guide'],
                        status: 'published'
                    }
                ],
                metadata: {
                    author: 'Enforcement Team',
                    createdAt: new Date('2025-01-12T09:00:00Z'),
                    lastModified: new Date('2025-01-12T09:00:00Z'),
                    publishedAt: new Date('2025-01-12T09:00:00Z'),
                    wordCount: 1800,
                    readingTime: 9,
                    tags: ['consequences', 'enforcement', 'violations', 'trust'],
                    audience: ['enforcement', 'policy'],
                    type: 'Enforcement Guide'
                },
                template: 'enforcement-guide-template',
                workflow: {
                    type: 'serial',
                    currentStep: 'published',
                    approvers: [
                        { role: 'enforcement', status: 'approved', approvedAt: new Date('2025-01-11T16:00:00Z') },
                        { role: 'legal', status: 'approved', approvedAt: new Date('2025-01-12T08:00:00Z') }
                    ]
                }
            },
            {
                id: 'guide-1124',
                title: 'GUIDE1124: Illegal Explicit Content Policy',
                category: 'policy',
                status: 'published',
                version: 1,
                versions: [
                    {
                        version: 1,
                        content: this.getIllegalContentContent(),
                        author: 'Legal Team',
                        timestamp: new Date('2025-01-08T13:00:00Z'),
                        changes: ['Initial policy publication'],
                        status: 'published'
                    }
                ],
                metadata: {
                    author: 'Legal Team',
                    createdAt: new Date('2025-01-08T13:00:00Z'),
                    lastModified: new Date('2025-01-08T13:00:00Z'),
                    publishedAt: new Date('2025-01-08T13:00:00Z'),
                    wordCount: 850,
                    readingTime: 4,
                    tags: ['illegal', 'explicit', 'content', 'prohibited'],
                    audience: ['enforcement', 'legal'],
                    type: 'Policy'
                },
                template: 'policy-guide-template',
                workflow: {
                    type: 'serial',
                    currentStep: 'published',
                    approvers: [
                        { role: 'legal', status: 'approved', approvedAt: new Date('2025-01-08T12:00:00Z') },
                        { role: 'policy', status: 'approved', approvedAt: new Date('2025-01-08T12:30:00Z') }
                    ]
                }
            },
            // Draft guides for demonstration
            {
                id: 'guide-draft-1',
                title: 'GUIDE1300: Cryptocurrency and Digital Assets Policy (DRAFT)',
                category: 'policy',
                status: 'draft',
                version: 1,
                versions: [
                    {
                        version: 1,
                        content: this.getCryptoPolicyDraft(),
                        author: 'Policy Team',
                        timestamp: new Date('2025-01-22T10:00:00Z'),
                        changes: ['Initial draft creation'],
                        status: 'draft'
                    }
                ],
                metadata: {
                    author: 'Policy Team',
                    createdAt: new Date('2025-01-22T10:00:00Z'),
                    lastModified: new Date('2025-01-22T15:00:00Z'),
                    publishedAt: null,
                    wordCount: 1200,
                    readingTime: 6,
                    tags: ['cryptocurrency', 'digital-assets', 'policy', 'draft'],
                    audience: ['enforcement', 'policy', 'legal'],
                    type: 'Policy'
                },
                template: 'policy-guide-template',
                workflow: {
                    type: 'serial',
                    currentStep: 'draft',
                    approvers: [
                        { role: 'legal', status: 'pending', approvedAt: null },
                        { role: 'policy', status: 'pending', approvedAt: null },
                        { role: 'enforcement', status: 'pending', approvedAt: null }
                    ]
                }
            },
            {
                id: 'guide-pending-1',
                title: 'GUIDE1301: AI-Generated Content Guidelines (PENDING)',
                category: 'policy',
                status: 'pending',
                version: 1,
                versions: [
                    {
                        version: 1,
                        content: this.getAIContentGuidelines(),
                        author: 'AI Policy Team',
                        timestamp: new Date('2025-01-22T16:00:00Z'),
                        changes: ['Initial guidelines creation'],
                        status: 'pending'
                    }
                ],
                metadata: {
                    author: 'AI Policy Team',
                    createdAt: new Date('2025-01-22T16:00:00Z'),
                    lastModified: new Date('2025-01-22T16:00:00Z'),
                    publishedAt: null,
                    wordCount: 950,
                    readingTime: 5,
                    tags: ['ai', 'content', 'guidelines', 'pending'],
                    audience: ['content', 'policy', 'legal'],
                    type: 'Guidelines'
                },
                template: 'policy-guide-template',
                workflow: {
                    type: 'parallel',
                    currentStep: 'pending',
                    approvers: [
                        { role: 'ai-ethics', status: 'pending', approvedAt: null },
                        { role: 'legal', status: 'pending', approvedAt: null },
                        { role: 'content', status: 'pending', approvedAt: null }
                    ]
                }
            }
        ];
    }

    // Template Management
    initializeTemplateManagement() {
        this.createTemplateInterface();
        this.bindTemplateEvents();
    }

    createTemplateInterface() {
        // Add template management to workflows view
        const workflowsContainer = document.querySelector('.workflows-container');
        if (!workflowsContainer) return;

        const templateSection = document.createElement('div');
        templateSection.className = 'template-management-section';
        templateSection.innerHTML = `
            <div class="section-header">
                <h3>
                    <i class="fas fa-layer-group"></i>
                    Workflow Templates
                </h3>
                <div class="section-actions">
                    <button class="btn btn-outline create-template-btn">
                        <i class="fas fa-plus"></i>
                        Create Template
                    </button>
                    <button class="btn btn-outline import-template-btn">
                        <i class="fas fa-upload"></i>
                        Import Template
                    </button>
                </div>
            </div>
            
            <div class="template-filters">
                <div class="filter-group">
                    <select id="template-category-filter">
                        <option value="">All Categories</option>
                        <option value="policy">Policy</option>
                        <option value="help">Help Articles</option>
                        <option value="enforcement">Enforcement</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>
                <div class="filter-group">
                    <select id="template-complexity-filter">
                        <option value="">All Complexity</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
            
            <div class="templates-grid" id="templates-grid">
                ${this.renderTemplateCards()}
            </div>
        `;

        // Insert before existing workflow templates
        const existingTemplates = workflowsContainer.querySelector('.workflow-templates');
        if (existingTemplates) {
            workflowsContainer.insertBefore(templateSection, existingTemplates);
        } else {
            workflowsContainer.appendChild(templateSection);
        }
    }

    renderTemplateCards() {
        return this.templates.map(template => `
            <div class="template-card enhanced" data-template-id="${template.id}">
                <div class="template-header">
                    <div class="template-icon">
                        <i class="fas ${this.getTemplateIcon(template.category)}"></i>
                    </div>
                    <div class="template-category">${template.category.toUpperCase()}</div>
                </div>
                <div class="template-content">
                    <h4>${template.name}</h4>
                    <p>${template.description}</p>
                    <div class="template-meta">
                        <span class="meta-item">
                            <i class="fas fa-clock"></i>
                            ${template.metadata.estimatedTime}
                        </span>
                        <span class="meta-item complexity-${template.metadata.complexity}">
                            <i class="fas fa-signal"></i>
                            ${template.metadata.complexity}
                        </span>
                        <span class="meta-item">
                            <i class="fas fa-users"></i>
                            ${template.approvers.length} approvers
                        </span>
                    </div>
                    <div class="template-sections">
                        <span class="sections-count">${template.sections.length} sections</span>
                        <div class="sections-preview">
                            ${template.sections.slice(0, 3).map(section => 
                                `<span class="section-tag">${section.title}</span>`
                            ).join('')}
                            ${template.sections.length > 3 ? `<span class="more-sections">+${template.sections.length - 3} more</span>` : ''}
                        </div>
                    </div>
                </div>
                <div class="template-actions">
                    <button class="btn btn-sm btn-outline preview-template-btn">
                        <i class="fas fa-eye"></i>
                        Preview
                    </button>
                    <button class="btn btn-sm btn-primary use-template-btn">
                        <i class="fas fa-rocket"></i>
                        Use Template
                    </button>
                    <div class="template-menu">
                        <button class="btn btn-sm btn-outline template-menu-btn">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                        <div class="template-dropdown">
                            <a href="#" class="dropdown-item edit-template-btn">
                                <i class="fas fa-edit"></i>
                                Edit Template
                            </a>
                            <a href="#" class="dropdown-item duplicate-template-btn">
                                <i class="fas fa-copy"></i>
                                Duplicate
                            </a>
                            <a href="#" class="dropdown-item export-template-btn">
                                <i class="fas fa-download"></i>
                                Export
                            </a>
                            <hr>
                            <a href="#" class="dropdown-item delete-template-btn text-danger">
                                <i class="fas fa-trash"></i>
                                Delete
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    getTemplateIcon(category) {
        const icons = {
            'policy': 'fa-gavel',
            'help': 'fa-question-circle',
            'enforcement': 'fa-shield-alt',
            'custom': 'fa-cog'
        };
        return icons[category] || 'fa-file-alt';
    }

    bindTemplateEvents() {
        // Use template buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.use-template-btn')) {
                const templateCard = e.target.closest('.template-card');
                const templateId = templateCard.getAttribute('data-template-id');
                this.useTemplate(templateId);
            } else if (e.target.closest('.preview-template-btn')) {
                const templateCard = e.target.closest('.template-card');
                const templateId = templateCard.getAttribute('data-template-id');
                this.previewTemplate(templateId);
            } else if (e.target.closest('.edit-template-btn')) {
                const templateCard = e.target.closest('.template-card');
                const templateId = templateCard.getAttribute('data-template-id');
                this.editTemplate(templateId);
            } else if (e.target.closest('.create-template-btn')) {
                this.createNewTemplate();
            }
        });

        // Template filters
        const categoryFilter = document.getElementById('template-category-filter');
        const complexityFilter = document.getElementById('template-complexity-filter');

        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => this.filterTemplates());
        }
        if (complexityFilter) {
            complexityFilter.addEventListener('change', () => this.filterTemplates());
        }
    }

    useTemplate(templateId) {
        const template = this.templates.find(t => t.id === templateId);
        if (!template) return;

        this.showTemplateUsageModal(template);
    }

    showTemplateUsageModal(template) {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.id = 'template-usage-modal';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <h2>Use Template: ${template.name}</h2>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="template-usage-form">
                        <div class="form-section">
                            <h3>Content Information</h3>
                            <div class="form-group">
                                <label>Content Title</label>
                                <input type="text" id="content-title" placeholder="Enter content title..." required>
                            </div>
                            <div class="form-group">
                                <label>Content Description</label>
                                <textarea id="content-description" placeholder="Brief description of the content..." rows="3"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Author</label>
                                <input type="text" id="content-author" value="John Doe" readonly>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Template Sections</h3>
                            <div class="sections-checklist">
                                ${template.sections.map(section => `
                                    <div class="section-item">
                                        <label class="checkbox-label">
                                            <input type="checkbox" checked ${section.modules.some(m => m.required) ? 'data-required="true"' : ''}>
                                            <span class="checkmark"></span>
                                            <div class="section-info">
                                                <div class="section-title">
                                                    ${section.title}
                                                    ${section.modules.some(m => m.required) ? '<span class="required-badge">Required</span>' : ''}
                                                </div>
                                                <div class="section-modules">
                                                    ${section.modules.map(module => 
                                                        `<span class="module-tag ${module.required ? 'required' : ''}">${module.title}</span>`
                                                    ).join('')}
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Workflow Configuration</h3>
                            <div class="workflow-preview">
                                <div class="workflow-type">
                                    <span class="workflow-badge ${template.workflow}">${template.workflow.toUpperCase()}</span>
                                </div>
                                <div class="approvers-list">
                                    ${template.approvers.map(approver => `
                                        <div class="approver-item">
                                            <div class="approver-role">${approver.role.toUpperCase()}</div>
                                            <div class="approver-order">Step ${approver.order}</div>
                                            ${approver.required ? '<span class="required-badge">Required</span>' : '<span class="optional-badge">Optional</span>'}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Additional Options</h3>
                            <div class="form-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" id="auto-populate" checked>
                                    <span class="checkmark"></span>
                                    Auto-populate sections with template content
                                </label>
                            </div>
                            <div class="form-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" id="start-workflow">
                                    <span class="checkmark"></span>
                                    Start workflow immediately after creation
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary cancel-template-btn">Cancel</button>
                    <button class="btn btn-primary create-from-template-btn">Create Content</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.initializeTemplateUsageModal(modal, template);
    }

    initializeTemplateUsageModal(modal, template) {
        // Close modal
        const closeBtn = modal.querySelector('.modal-close');
        const cancelBtn = modal.querySelector('.cancel-template-btn');
        
        [closeBtn, cancelBtn].forEach(btn => {
            btn.addEventListener('click', () => {
                modal.remove();
            });
        });

        // Create content button
        const createBtn = modal.querySelector('.create-from-template-btn');
        createBtn.addEventListener('click', () => {
            this.createContentFromTemplate(modal, template);
        });

        // Required section validation
        const requiredCheckboxes = modal.querySelectorAll('input[data-required="true"]');
        requiredCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                if (!e.target.checked) {
                    e.target.checked = true;
                    this.showNotification('Required sections cannot be unchecked', 'warning');
                }
            });
        });
    }

    createContentFromTemplate(modal, template) {
        const title = modal.querySelector('#content-title').value.trim();
        const description = modal.querySelector('#content-description').value.trim();
        const author = modal.querySelector('#content-author').value.trim();
        const autoPopulate = modal.querySelector('#auto-populate').checked;
        const startWorkflow = modal.querySelector('#start-workflow').checked;

        if (!title) {
            this.showNotification('Please enter a content title', 'warning');
            return;
        }

        // Get selected sections
        const selectedSections = [];
        const sectionCheckboxes = modal.querySelectorAll('.section-item input[type="checkbox"]');
        sectionCheckboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                selectedSections.push(template.sections[index]);
            }
        });

        // Create new content based on template
        const newContent = this.generateContentFromTemplate(template, {
            title,
            description,
            author,
            selectedSections,
            autoPopulate
        });

        // Add to guides
        this.guides.unshift(newContent);

        // Close modal
        modal.remove();

        // Show success and navigate
        this.showNotification(`Content "${title}" created from template!`, 'success');

        // Start workflow if requested
        if (startWorkflow) {
            setTimeout(() => {
                this.startWorkflowForGuide(newContent.id);
            }, 1000);
        }

        // Navigate to editor or guide management
        this.showGuideEditor(newContent.id);
    }

    generateContentFromTemplate(template, options) {
        const { title, description, author, selectedSections, autoPopulate } = options;
        
        let content = '';
        if (autoPopulate) {
            content = this.generateTemplateContent(template, selectedSections, title);
        }

        return {
            id: `guide-${Date.now()}`,
            title: title,
            category: template.category,
            status: 'draft',
            version: 1,
            versions: [
                {
                    version: 1,
                    content: content,
                    author: author,
                    timestamp: new Date(),
                    changes: ['Created from template'],
                    status: 'draft'
                }
            ],
            metadata: {
                author: author,
                createdAt: new Date(),
                lastModified: new Date(),
                publishedAt: null,
                wordCount: content ? this.calculateWordCount(content) : 0,
                readingTime: content ? Math.ceil(this.calculateWordCount(content) / 200) : 0,
                tags: [...template.metadata.tags, 'template-generated'],
                audience: template.metadata.audience || ['general'],
                type: template.metadata.type || 'Guide',
                description: description
            },
            template: template.id,
            workflow: {
                type: template.workflow,
                currentStep: 'draft',
                approvers: template.approvers.map(approver => ({
                    role: approver.role,
                    status: 'pending',
                    approvedAt: null,
                    required: approver.required,
                    order: approver.order
                }))
            }
        };
    }

    generateTemplateContent(template, selectedSections, title) {
        let content = `<h1>${title}</h1>\n\n`;
        
        selectedSections.forEach(section => {
            content += `<h2>${section.title}</h2>\n\n`;
            
            section.modules.forEach(module => {
                content += `<h3>${module.title}</h3>\n\n`;
                content += `<p>[Content for ${module.title} - Please replace with actual content]</p>\n\n`;
                
                // Add some template structure based on module type
                if (module.title.toLowerCase().includes('examples')) {
                    content += `<ul>\n<li>Example 1</li>\n<li>Example 2</li>\n<li>Example 3</li>\n</ul>\n\n`;
                } else if (module.title.toLowerCase().includes('steps') || module.title.toLowerCase().includes('instructions')) {
                    content += `<ol>\n<li>Step 1</li>\n<li>Step 2</li>\n<li>Step 3</li>\n</ol>\n\n`;
                }
            });
        });
        
        return content;
    }

    // Guide Management
    initializeGuideManagement() {
        this.createGuideInterface();
        this.bindGuideEvents();
    }

    createGuideInterface() {
        // Add guide management section to workflows view
        const workflowsContainer = document.querySelector('.workflows-container');
        if (!workflowsContainer) return;

        const guideSection = document.createElement('div');
        guideSection.className = 'guide-management-section';
        guideSection.innerHTML = `
            <div class="section-header">
                <h3>
                    <i class="fas fa-book"></i>
                    Content Guides
                </h3>
                <div class="section-actions">
                    <button class="btn btn-outline create-guide-btn">
                        <i class="fas fa-plus"></i>
                        Create Guide
                    </button>
                    <button class="btn btn-outline import-guide-btn">
                        <i class="fas fa-upload"></i>
                        Import Guide
                    </button>
                </div>
            </div>
            
            <div class="guide-filters">
                <div class="filter-group">
                    <input type="text" id="guide-search" placeholder="Search guides..." class="search-input">
                </div>
                <div class="filter-group">
                    <select id="guide-status-filter">
                        <option value="">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="draft">Draft</option>
                        <option value="review">In Review</option>
                        <option value="approved">Approved</option>
                        <option value="published">Published</option>
                        <option value="archived">Archived</option>
                    </select>
                </div>
                <div class="filter-group">
                    <select id="guide-category-filter">
                        <option value="">All Categories</option>
                        <option value="policy">Policy</option>
                        <option value="help">Help</option>
                        <option value="enforcement">Enforcement</option>
                    </select>
                </div>
                <div class="filter-group">
                    <select id="guide-sort">
                        <option value="modified">Last Modified</option>
                        <option value="created">Created Date</option>
                        <option value="title">Title</option>
                        <option value="status">Status</option>
                    </select>
                </div>
            </div>
            
            <div class="guides-list" id="guides-list">
                ${this.renderGuidesList()}
            </div>
        `;

        workflowsContainer.appendChild(guideSection);
    }

    renderGuidesList() {
        return this.guides.map(guide => `
            <div class="guide-item" data-guide-id="${guide.id}">
                <div class="guide-main">
                    <div class="guide-header">
                        <div class="guide-title-section">
                            <h4 class="guide-title">${guide.title}</h4>
                            <div class="guide-meta">
                                <span class="guide-id">${guide.id.toUpperCase()}</span>
                                <span class="guide-category">${guide.category.toUpperCase()}</span>
                                <span class="guide-type">${guide.metadata.type}</span>
                            </div>
                        </div>
                        <div class="guide-status-section">
                            <span class="status-badge status-${guide.status}">${this.formatStatus(guide.status)}</span>
                            <span class="version-badge">v${guide.version}</span>
                            ${guide.versions.length > 1 ? `<span class="versions-count">${guide.versions.length} versions</span>` : ''}
                        </div>
                    </div>
                    
                    <div class="guide-details">
                        <div class="guide-info">
                            <div class="info-item">
                                <i class="fas fa-user"></i>
                                <span>${guide.metadata.author}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-clock"></i>
                                <span>${this.formatDate(guide.metadata.lastModified)}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-file-word"></i>
                                <span>${guide.metadata.wordCount} words</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-stopwatch"></i>
                                <span>${guide.metadata.readingTime} min read</span>
                            </div>
                        </div>
                        
                        <div class="guide-tags">
                            ${guide.metadata.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        
                        ${guide.metadata.description ? `
                            <div class="guide-description">
                                <p>${guide.metadata.description}</p>
                            </div>
                        ` : ''}
                        
                        <div class="guide-workflow">
                            <div class="workflow-info">
                                <span class="workflow-type">${guide.workflow.type.toUpperCase()}</span>
                                <span class="workflow-step">${guide.workflow.currentStep}</span>
                            </div>
                            <div class="workflow-approvers">
                                ${guide.workflow.approvers.map(approver => `
                                    <span class="approver-badge ${approver.status}">
                                        ${approver.role.toUpperCase()}
                                        <i class="fas ${this.getApproverStatusIcon(approver.status)}"></i>
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="guide-actions">
                    <button class="btn btn-sm btn-outline view-guide-btn" title="View Guide">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-outline edit-guide-btn" title="Edit Guide">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-outline versions-guide-btn" title="Version History">
                        <i class="fas fa-history"></i>
                    </button>
                    ${guide.status === 'published' ? `
                        <button class="btn btn-sm btn-outline republish-guide-btn" title="Republish">
                            <i class="fas fa-redo"></i>
                        </button>
                    ` : ''}
                    <div class="guide-menu">
                        <button class="btn btn-sm btn-outline guide-menu-btn">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                        <div class="guide-dropdown">
                            <a href="#" class="dropdown-item duplicate-guide-btn">
                                <i class="fas fa-copy"></i>
                                Duplicate
                            </a>
                            <a href="#" class="dropdown-item export-guide-btn">
                                <i class="fas fa-download"></i>
                                Export
                            </a>
                            <a href="#" class="dropdown-item archive-guide-btn">
                                <i class="fas fa-archive"></i>
                                Archive
                            </a>
                            <hr>
                            <a href="#" class="dropdown-item delete-guide-btn text-danger">
                                <i class="fas fa-trash"></i>
                                Delete
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    getApproverStatusIcon(status) {
        const icons = {
            'pending': 'fa-clock',
            'approved': 'fa-check',
            'rejected': 'fa-times',
            'in-review': 'fa-eye'
        };
        return icons[status] || 'fa-circle';
    }

    bindGuideEvents() {
        // Guide actions
        document.addEventListener('click', (e) => {
            if (e.target.closest('.view-guide-btn')) {
                const guideItem = e.target.closest('.guide-item');
                const guideId = guideItem.getAttribute('data-guide-id');
                this.viewGuide(guideId);
            } else if (e.target.closest('.edit-guide-btn')) {
                const guideItem = e.target.closest('.guide-item');
                const guideId = guideItem.getAttribute('data-guide-id');
                this.editGuide(guideId);
            } else if (e.target.closest('.versions-guide-btn')) {
                const guideItem = e.target.closest('.guide-item');
                const guideId = guideItem.getAttribute('data-guide-id');
                this.showVersionHistory(guideId);
            } else if (e.target.closest('.republish-guide-btn')) {
                const guideItem = e.target.closest('.guide-item');
                const guideId = guideItem.getAttribute('data-guide-id');
                this.republishGuide(guideId);
            } else if (e.target.closest('.create-guide-btn')) {
                this.createNewGuide();
            }
        });

        // Guide filters
        const searchInput = document.getElementById('guide-search');
        const statusFilter = document.getElementById('guide-status-filter');
        const categoryFilter = document.getElementById('guide-category-filter');
        const sortSelect = document.getElementById('guide-sort');

        if (searchInput) {
            searchInput.addEventListener('input', () => this.filterGuides());
        }
        if (statusFilter) {
            statusFilter.addEventListener('change', () => this.filterGuides());
        }
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => this.filterGuides());
        }
        if (sortSelect) {
            sortSelect.addEventListener('change', () => this.filterGuides());
        }
    }

    // Versioning System
    initializeVersioning() {
        this.versioningEnabled = true;
    }

    createNewVersion(guideId, content, changes, author) {
        const guide = this.guides.find(g => g.id === guideId);
        if (!guide) return null;

        const newVersion = guide.version + 1;
        const newVersionData = {
            version: newVersion,
            content: content,
            author: author,
            timestamp: new Date(),
            changes: changes,
            status: 'draft'
        };

        guide.versions.push(newVersionData);
        guide.version = newVersion;
        guide.metadata.lastModified = new Date();
        guide.metadata.wordCount = this.calculateWordCount(content);
        guide.metadata.readingTime = Math.ceil(guide.metadata.wordCount / 200);

        return newVersionData;
    }

    republishGuide(guideId) {
        const guide = this.guides.find(g => g.id === guideId);
        if (!guide) return;

        // Check if guide name already exists with different version
        const existingGuides = this.guides.filter(g => 
            g.title.replace(/ v\d+$/, '') === guide.title.replace(/ v\d+$/, '') && 
            g.id !== guideId
        );

        let newTitle = guide.title;
        if (existingGuides.length > 0) {
            // Add version number to title
            const versionMatch = guide.title.match(/ v(\d+)$/);
            if (versionMatch) {
                const currentVersion = parseInt(versionMatch[1]);
                newTitle = guide.title.replace(/ v\d+$/, ` v${currentVersion + 1}`);
            } else {
                newTitle = `${guide.title} v2`;
            }
        }

        // Create new version
        const newVersion = this.createNewVersion(
            guideId,
            guide.versions[guide.versions.length - 1].content,
            ['Republished with updates'],
            guide.metadata.author
        );

        // Update title if versioned
        if (newTitle !== guide.title) {
            guide.title = newTitle;
        }

        // Reset workflow
        guide.status = 'draft';
        guide.workflow.currentStep = 'draft';
        guide.workflow.approvers.forEach(approver => {
            approver.status = 'pending';
            approver.approvedAt = null;
        });

        this.showNotification(`Guide "${guide.title}" prepared for republishing!`, 'success');
        this.refreshGuidesList();
    }

    // Content State Management
    initializeContentStates() {
        this.contentStates.forEach(state => {
            this.createStateHandlers(state);
        });
    }

    createStateHandlers(state) {
        // Create handlers for each content state
        this[`moveTo${state.charAt(0).toUpperCase() + state.slice(1)}`] = (guideId) => {
            this.changeGuideStatus(guideId, state);
        };
    }

    changeGuideStatus(guideId, newStatus) {
        const guide = this.guides.find(g => g.id === guideId);
        if (!guide) return;

        const oldStatus = guide.status;
        guide.status = newStatus;
        guide.workflow.currentStep = newStatus;
        guide.metadata.lastModified = new Date();

        // Add status change to version history
        const latestVersion = guide.versions[guide.versions.length - 1];
        if (latestVersion) {
            latestVersion.changes.push(`Status changed from ${oldStatus} to ${newStatus}`);
        }

        this.showNotification(`Guide status changed to ${newStatus}`, 'success');
        this.refreshGuidesList();
    }

    // Utility Methods
    formatStatus(status) {
        const statusMap = {
            'pending': 'Pending',
            'draft': 'Draft',
            'review': 'In Review',
            'approved': 'Approved',
            'published': 'Published',
            'archived': 'Archived'
        };
        return statusMap[status] || status;
    }

    formatDate(date) {
        if (!date) return 'Unknown';
        const d = new Date(date);
        return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
    }

    calculateWordCount(text) {
        if (!text) return 0;
        return text.replace(/<[^>]*>/g, '').trim().split(/\s+/).filter(word => word.length > 0).length;
    }

    showNotification(message, type = 'success') {
        if (window.airaApp) {
            window.airaApp.showNotification(message, type);
        }
    }

    refreshGuidesList() {
        const guidesList = document.getElementById('guides-list');
        if (guidesList) {
            guidesList.innerHTML = this.renderGuidesList();
        }
    }

    // Content generation methods for sample guides
    getKnivesPolicyContent() {
        return `
            <h1>GUIDE1195: Knives Policy - Prohibited and Restricted Items</h1>
            
            <h2>Section 1: Overview</h2>
            
            <h3>Module 1.1: Policy summary</h3>
            <p><strong>Type:</strong> Informational</p>
            <p><strong>Audience:</strong> All (customers, teammates, enforcement)</p>
            <p><strong>Tags:</strong> knives-policy, informational, overview, compliance</p>
            <p>Only knives that follow our rules can be listed on eBay. No other knives are allowed.</p>
            
            <h3>Module 1.2: What this policy covers</h3>
            <p>This policy explains what knife-related items are not allowed on eBay. It also lists which knives are allowed if sellers follow all conditions.</p>
            
            <h3>Module 1.3: Why we have this policy</h3>
            <p>This policy helps ensure important government regulations are followed. For safety concerns and in order to follow laws and regulations, we restrict the types of weapons and accessories that can be sold on eBay.</p>
            
            <h2>Section 2: What's not allowed</h2>
            
            <h3>Module 2.1: Prohibited items</h3>
            <p>The following or similar types of knives aren't allowed:</p>
            <ul>
                <li>Automatic knives</li>
                <li>Butterfly knives</li>
                <li>Dual-action knives</li>
                <li>Gravity knives</li>
                <li>Out-the-front knives</li>
                <li>Paratrooper knives</li>
                <li>Push knives</li>
                <li>Switchblade knives</li>
                <li>Sword canes</li>
                <li>Spring-assisted knives where there is no manual movement by a thumb stud or screw clearly visible on the blade</li>
                <li>Hidden or disguised knives such as writing pen knives or belt buckle knives</li>
            </ul>
            
            <h2>Section 3: What's allowed</h2>
            
            <h3>Module 3.1: Examples of allowed knives/accessories</h3>
            <p>All types of knives not in the previous list are allowed. The listing must also follow our international trading policy.</p>
            
            <h2>Section 4: Country-specific rules</h2>
            <p>The international sale of weapons is highly regulated. Before you list a weapon, please review the policies for each of the eBay sites where you wish to sell the item.</p>
            <ul>
                <li>Throwing knives can only be shipped within the U.S. or Canada</li>
                <li>The sale of knives on eBay.co.uk and eBay.ie is prohibited with limited exceptions, even when worldwide shipping is enabled</li>
            </ul>
        `;
    }

    getUnapprovedDrugsContent() {
        return `
            <h1>GUIDE1210: Data table for unapproved drugs in the United States</h1>
            
            <h2>Overview</h2>
            <p>This guide contains a comprehensive list of unapproved drugs that are prohibited from sale on eBay in the United States. The data is regularly updated based on FDA guidance and enforcement actions.</p>
            
            <h2>Prohibited Drug Categories</h2>
            <ul>
                <li>Prescription medications without proper authorization</li>
                <li>Unapproved pharmaceutical compounds</li>
                <li>Controlled substances</li>
                <li>Injectable vitamins and supplements</li>
                <li>Cosmetic products with prohibited ingredients</li>
            </ul>
            
            <h2>Key Prohibited Ingredients</h2>
            <ul>
                <li><strong>Hydroquinone:</strong> Skin bleaching agent (4% or higher concentrations)</li>
                <li><strong>Tretinoin:</strong> Prescription retinoid</li>
                <li><strong>Prescription steroids:</strong> Including betamethasone, clobetasol</li>
                <li><strong>Injectable vitamins:</strong> B12, vitamin C injections</li>
                <li><strong>Controlled substances:</strong> Schedule I-V drugs</li>
            </ul>
            
            <h2>Enforcement Guidelines</h2>
            <p>Items containing these substances should be removed immediately upon identification. Sellers should be educated about FDA regulations and directed to appropriate resources.</p>
        `;
    }

    getOffensiveMaterialsContent() {
        return `
            <h1>GUIDE1096: Glorifying Hatred - Offensive Materials Policy</h1>
            
            <h2>Section 1: Overview</h2>
            
            <h3>1.1 Policy summary</h3>
            <p>Listings or content that promote or glorify hatred, violence, or discrimination aren't allowed.</p>
            
            <h3>1.2 What this policy covers</h3>
            <p>This policy explains what offensive material items aren't allowed on eBay. It also lists which items are allowed if the appropriate conditions are followed.</p>
            
            <h3>1.3 Why we have this policy</h3>
            <p>In order to promote trust and respect among our diverse community of members, eBay does not allow items or content that promote or glorify hatred, violence, discrimination or intolerance.</p>
            
            <h2>Section 2: What's not allowed</h2>
            
            <h3>2.1 Prohibited items</h3>
            <ul>
                <li>Slurs or epithets of any kind</li>
                <li>Slavery items, including reproductions</li>
                <li>Items with racist, anti-Semitic, or otherwise demeaning portrayals</li>
                <li>Black Americana items that are discriminatory</li>
                <li>Confederate battle flag and related items</li>
                <li>Historical Holocaust-related and Nazi-related items</li>
                <li>Any item that is anti-Semitic or bears a swastika (post-1933)</li>
                <li>Media identified as Nazi propaganda</li>
            </ul>
            
            <h2>Section 3: What's allowed</h2>
            
            <h3>3.1 Examples of allowed materials</h3>
            <ul>
                <li>Historical photos, magazines, books and art (non-glorifying)</li>
                <li>Items related to the Civil Rights Movement</li>
                <li>Stamps, letters, and envelopes displaying Nazi postmarks</li>
                <li>Currency issued by Nazi Germany government</li>
                <li>Historically accurate WWII military model kits</li>
                <li>Historical and religious items with swastika made before 1933</li>
            </ul>
        `;
    }

    getUnifiedConsequencesContent() {
        return `
            <h1>GUIDE1120: Unified Consequences Path - Trust Policies</h1>
            
            <h2>Section 1: Overview</h2>
            <p>Trust Policies: LP, PI, Inf, VeRO, Selling Policy, Member Behavior, Abusive Buyer, Drop Shipping, Performance Gaming, Bad Actor.</p>
            <p>Use these consequence guidelines to help determine what action should be taken. The severity levels are explained below the consequences themselves.</p>
            
            <h2>Section 2: Consequence Guidelines</h2>
            <p>Consequences are recommended in the tools based on the specific policy violated, the seller's prior violations, and any special account flags.</p>
            
            <h3>Grace periods:</h3>
            <ul>
                <li>7-day grace period for all Trust policies</li>
                <li>30-day grace period for PRCI policies (trusted managed accounts, Enterprise sellers)</li>
                <li>Unlimited grace period for Issue 777 accounts</li>
            </ul>
            
            <h3>Look-back period:</h3>
            <p>180 days. Violation count is per unique L3 policy.</p>
            
            <h2>Section 3: Unified Consequence Path</h2>
            <ol>
                <li>No action → Grace period/tech issue</li>
                <li>1st Warn</li>
                <li>2nd Warn</li>
                <li>3rd 3-day restriction</li>
                <li>4th 7-day restriction</li>
                <li>5th+ 10-day restriction</li>
            </ol>
            
            <h2>Section 4: Policy-specific enforcement</h2>
            <ul>
                <li><strong>Member behavior:</strong> escalating buy/sell restrictions and hide listings</li>
                <li><strong>Performance gaming:</strong> escalating restrictions + removal of eTRS</li>
                <li><strong>Abusive buyer:</strong> warn → block → suspend</li>
                <li><strong>Bad actor:</strong> suspension, listing removal, permanent M2M block</li>
            </ul>
        `;
    }

    getIllegalContentContent() {
        return `
            <h1>GUIDE1124: Illegal Explicit Content Policy</h1>
            
            <h2>Section 1: Overview</h2>
            
            <h3>Module 1.1: Policy summary</h3>
            <p>eBay never allows illegal or obscene content. This includes listings or content that depict or glamorize child pornography, bestiality, torture, snuff films, necrophilia, rape, scat, incest, or other prohibited material, whether real or fictionalized.</p>
            
            <h3>Module 1.2: What this policy covers</h3>
            <p>This policy explains what illegal and/or explicit content isn't allowed on eBay.</p>
            
            <h3>Module 1.3: Why we have this policy</h3>
            <p>eBay never allows listings which include illegal material.</p>
            
            <h2>Section 2: What's not allowed</h2>
            
            <h3>Module 2.1: Prohibited content categories</h3>
            <ul>
                <li>We never allow any listings or content depicting or describing child pornography, whether real or fictionalized</li>
                <li>We never allow any listings or content depicting or describing bestiality, torture, snuff films, necrophilia, rape, scat, incest, or other illegal or obscene content, whether real or fictionalized</li>
            </ul>
            
            <h2>Section 3: What's allowed</h2>
            
            <h3>Module 3.1: Exceptions</h3>
            <p>There are no exceptions with this policy.</p>
            
            <h2>Section 4: Enforcement guide</h2>
            
            <h3>Module 4.1: Restricted items</h3>
            <ul>
                <li>Items depicting or glamorizing bestiality, torture, snuff films, necrophilia, rape, scat and incest (real or fictionalized)</li>
                <li>Infant, baby, or toddler dolls that depict or suggest sexualization</li>
                <li>Items from or relating to prohibited sites due to criminal convictions</li>
                <li>Any sexualized media featuring minors</li>
            </ul>
        `;
    }

    getCryptoPolicyDraft() {
        return `
            <h1>GUIDE1300: Cryptocurrency and Digital Assets Policy (DRAFT)</h1>
            
            <h2>Section 1: Overview</h2>
            
            <h3>Policy summary</h3>
            <p><strong>Type:</strong> Policy</p>
            <p><strong>Audience:</strong> All (customers, teammates, enforcement)</p>
            <p><strong>Status:</strong> DRAFT - Under Review</p>
            
            <p>This policy outlines eBay's approach to cryptocurrency, digital assets, NFTs, and related blockchain technologies on our platform.</p>
            
            <h3>What this policy covers</h3>
            <p>This policy explains what cryptocurrency and digital asset related items and services are allowed or prohibited on eBay.</p>
            
            <h3>Why we have this policy</h3>
            <p>Due to the evolving regulatory landscape and potential risks associated with digital assets, eBay maintains specific guidelines to protect our community while enabling legitimate commerce.</p>
            
            <h2>Section 2: What's not allowed</h2>
            
            <h3>Prohibited items</h3>
            <ul>
                <li>Direct sale of cryptocurrencies or digital tokens</li>
                <li>Mining contracts or cloud mining services</li>
                <li>Investment schemes or financial advice related to crypto</li>
                <li>Unregulated digital asset exchanges or wallets</li>
                <li>NFTs without proper verification and ownership proof</li>
            </ul>
            
            <h2>Section 3: What's allowed</h2>
            
            <h3>Permitted items</h3>
            <ul>
                <li>Physical cryptocurrency collectibles (coins, memorabilia)</li>
                <li>Educational materials about blockchain technology</li>
                <li>Hardware wallets and mining equipment</li>
                <li>Books and courses about cryptocurrency</li>
                <li>Verified NFTs with proper documentation</li>
            </ul>
            
            <h2>Section 4: Special Requirements</h2>
            
            <h3>For NFT sales</h3>
            <ul>
                <li>Proof of ownership required</li>
                <li>Clear description of rights transferred</li>
                <li>Compliance with intellectual property laws</li>
                <li>Platform verification process</li>
            </ul>
            
            <p><em>Note: This policy is currently in draft status and subject to legal and regulatory review.</em></p>
        `;
    }

    getAIContentGuidelines() {
        return `
            <h1>GUIDE1301: AI-Generated Content Guidelines (PENDING)</h1>
            
            <h2>Section 1: Overview</h2>
            
            <h3>Guidelines summary</h3>
            <p><strong>Type:</strong> Guidelines</p>
            <p><strong>Audience:</strong> Content creators, sellers, enforcement</p>
            <p><strong>Status:</strong> PENDING - Awaiting Approval</p>
            
            <p>These guidelines establish standards for AI-generated content on eBay, including listings, descriptions, images, and other materials.</p>
            
            <h3>What these guidelines cover</h3>
            <p>This document outlines requirements and best practices for using AI-generated content while maintaining transparency and quality standards.</p>
            
            <h3>Why we have these guidelines</h3>
            <p>As AI technology becomes more prevalent, we need clear standards to ensure content quality, transparency, and compliance with our community standards.</p>
            
            <h2>Section 2: AI Content Requirements</h2>
            
            <h3>Disclosure requirements</h3>
            <ul>
                <li>AI-generated images must be clearly labeled</li>
                <li>AI-written descriptions should be disclosed when substantial</li>
                <li>Synthetic media must include appropriate warnings</li>
                <li>Deepfakes and misleading AI content are prohibited</li>
            </ul>
            
            <h3>Quality standards</h3>
            <ul>
                <li>AI content must be accurate and not misleading</li>
                <li>Generated images must represent actual products</li>
                <li>AI descriptions must be factually correct</li>
                <li>Content must comply with all existing policies</li>
            </ul>
            
            <h2>Section 3: Prohibited AI Content</h2>
            
            <h3>Not allowed</h3>
            <ul>
                <li>Deepfakes of real people without consent</li>
                <li>AI-generated content that violates intellectual property</li>
                <li>Misleading product representations</li>
                <li>AI content that promotes harmful activities</li>
                <li>Undisclosed AI-generated reviews or testimonials</li>
            </ul>
            
            <h2>Section 4: Best Practices</h2>
            
            <h3>Recommended approaches</h3>
            <ul>
                <li>Use AI as a tool to enhance, not replace, authentic content</li>
                <li>Always verify AI-generated information for accuracy</li>
                <li>Maintain human oversight of AI content</li>
                <li>Be transparent about AI usage</li>
                <li>Regularly review and update AI-generated content</li>
            </ul>
            
            <p><em>Note: These guidelines are pending final approval and may be subject to changes based on stakeholder feedback.</em></p>
        `;
    }

    // Additional methods for guide management
    viewGuide(guideId) {
        const guide = this.guides.find(g => g.id === guideId);
        if (!guide) return;

        // Use the existing content view modal from the main app
        if (window.airaApp) {
            window.airaApp.showContentViewModal(this.convertGuideToContent(guide));
        }
    }

    editGuide(guideId) {
        const guide = this.guides.find(g => g.id === guideId);
        if (!guide) return;

        this.showGuideEditor(guideId);
    }

    showGuideEditor(guideId) {
        const guide = this.guides.find(g => g.id === guideId);
        if (!guide) return;

        // Switch to editor view and load the guide
        if (window.airaApp) {
            window.airaApp.currentContent = this.convertGuideToContent(guide);
            window.airaApp.switchView('editor');
            window.airaApp.loadContentInEditor(window.airaApp.currentContent);
        }
    }

    convertGuideToContent(guide) {
        return {
            id: guide.id,
            title: guide.title,
            status: guide.status,
            performance: { rating: 4.5, label: "Excellent", reviews: 0 },
            views: { count: 0, helpful: 0 },
            lastEdited: "Just now",
            reviewers: guide.workflow.approvers.map(a => a.role.substring(0, 2).toUpperCase()),
            workflow: guide.workflow.type,
            metadata: guide.metadata,
            versions: guide.versions,
            content: guide.versions[guide.versions.length - 1].content
        };
    }

    showVersionHistory(guideId) {
        const guide = this.guides.find(g => g.id === guideId);
        if (!guide) return;

        // Create version history modal
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <h2>Version History: ${guide.title}</h2>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="version-history-list">
                        ${guide.versions.map((version, index) => `
                            <div class="version-item ${index === guide.versions.length - 1 ? 'current' : ''}">
                                <div class="version-header">
                                    <div class="version-info">
                                        <span class="version-number">Version ${version.version}</span>
                                        ${index === guide.versions.length - 1 ? '<span class="current-badge">Current</span>' : ''}
                                        <span class="version-status status-${version.status}">${this.formatStatus(version.status)}</span>
                                    </div>
                                    <div class="version-meta">
                                        <span class="version-author">by ${version.author}</span>
                                        <span class="version-date">${this.formatDate(version.timestamp)}</span>
                                    </div>
                                </div>
                                <div class="version-changes">
                                    <h5>Changes:</h5>
                                    <ul>
                                        ${version.changes.map(change => `<li>${change}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="version-actions">
                                    <button class="btn btn-sm btn-outline view-version-btn" data-version="${version.version}">
                                        <i class="fas fa-eye"></i>
                                        View
                                    </button>
                                    ${index !== guide.versions.length - 1 ? `
                                        <button class="btn btn-sm btn-outline restore-version-btn" data-version="${version.version}">
                                            <i class="fas fa-undo"></i>
                                            Restore
                                        </button>
                                    ` : ''}
                                    <button class="btn btn-sm btn-outline compare-version-btn" data-version="${version.version}">
                                        <i class="fas fa-code-branch"></i>
                                        Compare
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary close-versions-btn">Close</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Bind events
        modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
        modal.querySelector('.close-versions-btn').addEventListener('click', () => modal.remove());
    }

    createNewGuide() {
        // Show template selection modal
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Create New Guide</h2>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="guide-creation-options">
                        <h3>Choose how to create your guide:</h3>
                        
                        <div class="creation-option" data-option="template">
                            <div class="option-icon">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <div class="option-content">
                                <h4>Use Template</h4>
                                <p>Start with a pre-built template for faster creation</p>
                            </div>
                            <div class="option-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        
                        <div class="creation-option" data-option="blank">
                            <div class="option-icon">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <div class="option-content">
                                <h4>Start from Scratch</h4>
                                <p>Create a completely custom guide</p>
                            </div>
                            <div class="option-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        
                        <div class="creation-option" data-option="import">
                            <div class="option-icon">
                                <i class="fas fa-upload"></i>
                            </div>
                            <div class="option-content">
                                <h4>Import Existing</h4>
                                <p>Import from Word, PDF, or other formats</p>
                            </div>
                            <div class="option-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Bind events
        modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
        
        modal.querySelectorAll('.creation-option').forEach(option => {
            option.addEventListener('click', () => {
                const optionType = option.getAttribute('data-option');
                modal.remove();
                
                switch (optionType) {
                    case 'template':
                        this.showTemplateSelection();
                        break;
                    case 'blank':
                        this.createBlankGuide();
                        break;
                    case 'import':
                        this.showImportOptions();
                        break;
                }
            });
        });
    }

    showTemplateSelection() {
        // Show template selection with enhanced UI
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <h2>Select Template</h2>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="template-selection">
                        ${this.templates.map(template => `
                            <div class="template-option" data-template-id="${template.id}">
                                <div class="template-preview">
                                    <div class="template-icon">
                                        <i class="fas ${this.getTemplateIcon(template.category)}"></i>
                                    </div>
                                    <h4>${template.name}</h4>
                                    <p>${template.description}</p>
                                    <div class="template-details">
                                        <span class="detail-item">${template.sections.length} sections</span>
                                        <span class="detail-item">${template.metadata.complexity} complexity</span>
                                        <span class="detail-item">${template.metadata.estimatedTime}</span>
                                    </div>
                                </div>
                                <div class="template-actions">
                                    <button class="btn btn-primary select-template-btn">
                                        Select Template
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Bind events
        modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
        
        modal.querySelectorAll('.select-template-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const templateOption = e.target.closest('.template-option');
                const templateId = templateOption.getAttribute('data-template-id');
                modal.remove();
                this.useTemplate(templateId);
            });
        });
    }

    createBlankGuide() {
        // Create a blank guide and open in editor
        const newGuide = {
            id: `guide-${Date.now()}`,
            title: 'New Guide',
            category: 'custom',
            status: 'draft',
            version: 1,
            versions: [
                {
                    version: 1,
                    content: '<h1>New Guide</h1><p>Start writing your guide content here...</p>',
                    author: 'John Doe',
                    timestamp: new Date(),
                    changes: ['Initial creation'],
                    status: 'draft'
                }
            ],
            metadata: {
                author: 'John Doe',
                createdAt: new Date(),
                lastModified: new Date(),
                publishedAt: null,
                wordCount: 8,
                readingTime: 1,
                tags: ['custom'],
                audience: ['general'],
                type: 'Guide'
            },
            template: null,
            workflow: {
                type: 'serial',
                currentStep: 'draft',
                approvers: []
            }
        };

        this.guides.unshift(newGuide);
        this.showNotification('New blank guide created!', 'success');
        this.showGuideEditor(newGuide.id);
    }

    showImportOptions() {
        this.showNotification('Import functionality coming soon!', 'info');
    }

    filterGuides() {
        const searchTerm = document.getElementById('guide-search')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('guide-status-filter')?.value || '';
        const categoryFilter = document.getElementById('guide-category-filter')?.value || '';
        const sortBy = document.getElementById('guide-sort')?.value || 'modified';

        let filteredGuides = [...this.guides];

        // Apply filters
        if (searchTerm) {
            filteredGuides = filteredGuides.filter(guide => 
                guide.title.toLowerCase().includes(searchTerm) ||
                guide.metadata.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }

        if (statusFilter) {
            filteredGuides = filteredGuides.filter(guide => guide.status === statusFilter);
        }

        if (categoryFilter) {
            filteredGuides = filteredGuides.filter(guide => guide.category === categoryFilter);
        }

        // Apply sorting
        filteredGuides.sort((a, b) => {
            switch (sortBy) {
                case 'created':
                    return new Date(b.metadata.createdAt) - new Date(a.metadata.createdAt);
                case 'title':
                    return a.title.localeCompare(b.title);
                case 'status':
                    return a.status.localeCompare(b.status);
                case 'modified':
                default:
                    return new Date(b.metadata.lastModified) - new Date(a.metadata.lastModified);
            }
        });

        // Update display
        const guidesList = document.getElementById('guides-list');
        if (guidesList) {
            if (filteredGuides.length === 0) {
                guidesList.innerHTML = `
                    <div class="no-guides-message">
                        <i class="fas fa-search"></i>
                        <h3>No guides found</h3>
                        <p>Try adjusting your search criteria or create a new guide</p>
                    </div>
                `;
            } else {
                guidesList.innerHTML = filteredGuides.map(guide => this.renderGuideItem(guide)).join('');
            }
        }
    }

    renderGuideItem(guide) {
        // This would be the same as the guide item rendering in renderGuidesList
        // but for a single guide - extracted for reuse
        return `
            <div class="guide-item" data-guide-id="${guide.id}">
                <!-- Same content as in renderGuidesList -->
            </div>
        `;
    }

    filterTemplates() {
        const categoryFilter = document.getElementById('template-category-filter')?.value || '';
        const complexityFilter = document.getElementById('template-complexity-filter')?.value || '';

        let filteredTemplates = [...this.templates];

        if (categoryFilter) {
            filteredTemplates = filteredTemplates.filter(template => template.category === categoryFilter);
        }

        if (complexityFilter) {
            filteredTemplates = filteredTemplates.filter(template => template.metadata.complexity === complexityFilter);
        }

        // Update display
        const templatesGrid = document.getElementById('templates-grid');
        if (templatesGrid) {
            templatesGrid.innerHTML = filteredTemplates.map(template => this.renderTemplateCard(template)).join('');
        }
    }

    renderTemplateCard(template) {
        // Return the template card HTML for a single template
        return `
            <div class="template-card enhanced" data-template-id="${template.id}">
                <!-- Same content as in renderTemplateCards -->
            </div>
        `;
    }

    startWorkflowForGuide(guideId) {
        const guide = this.guides.find(g => g.id === guideId);
        if (!guide) return;

        guide.status = 'review';
        guide.workflow.currentStep = 'review';
        
        this.showNotification(`Workflow started for "${guide.title}"`, 'success');
        this.refreshGuidesList();
    }

    previewTemplate(templateId) {
        const template = this.templates.find(t => t.id === templateId);
        if (!template) return;

        // Show template preview modal
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <h2>Template Preview: ${template.name}</h2>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="template-preview-content">
                        <div class="template-info">
                            <h3>Template Information</h3>
                            <div class="info-grid">
                                <div class="info-item">
                                    <label>Category:</label>
                                    <span>${template.category.toUpperCase()}</span>
                                </div>
                                <div class="info-item">
                                    <label>Workflow:</label>
                                    <span>${template.workflow.toUpperCase()}</span>
                                </div>
                                <div class="info-item">
                                    <label>Complexity:</label>
                                    <span>${template.metadata.complexity.toUpperCase()}</span>
                                </div>
                                <div class="info-item">
                                    <label>Estimated Time:</label>
                                    <span>${template.metadata.estimatedTime}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="template-sections">
                            <h3>Template Sections</h3>
                            ${template.sections.map(section => `
                                <div class="section-preview">
                                    <h4>${section.title}</h4>
                                    <div class="modules-list">
                                        ${section.modules.map(module => `
                                            <div class="module-item ${module.required ? 'required' : 'optional'}">
                                                <span class="module-title">${module.title}</span>
                                                <span class="module-badge">${module.required ? 'Required' : 'Optional'}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="template-workflow">
                            <h3>Approval Workflow</h3>
                            <div class="workflow-preview">
                                ${template.approvers.map(approver => `
                                    <div class="workflow-step">
                                        <div class="step-number">${approver.order}</div>
                                        <div class="step-info">
                                            <div class="step-role">${approver.role.toUpperCase()}</div>
                                            <div class="step-requirement">${approver.required ? 'Required' : 'Optional'}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary close-preview-btn">Close</button>
                    <button class="btn btn-primary use-template-from-preview-btn" data-template-id="${template.id}">Use This Template</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Bind events
        modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
        modal.querySelector('.close-preview-btn').addEventListener('click', () => modal.remove());
        modal.querySelector('.use-template-from-preview-btn').addEventListener('click', () => {
            modal.remove();
            this.useTemplate(templateId);
        });
    }

    editTemplate(templateId) {
        this.showNotification('Template editing functionality coming soon!', 'info');
    }

    createNewTemplate() {
        this.showNotification('Template creation functionality coming soon!', 'info');
    }
}

// Initialize the workflow template manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.workflowTemplateManager = new WorkflowTemplateManager();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WorkflowTemplateManager;
}
