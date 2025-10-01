// Global state management
class AiraApp {
    constructor() {
        this.currentView = 'dashboard';
        this.currentContent = null;
        this.aiThinking = false;
        this.draggedAsset = null;
        this.notifications = [];
        this.contentData = this.initializeContentData();
        this.assetData = this.initializeAssetData();
        this.eWatchSystem = null;
        
        this.init();
    }

    init() {
        this.initializeNavigation();
        this.initializeModals();
        this.initializeNotifications();
        this.initializeDragAndDrop();
        this.initializeEditor();
        this.initializeAIAssistant();
        this.initializeWorkflows();
        this.initializeAssetLibrary();
        this.initializeContentTable();
        this.initializeEWatchSystem();
        this.initializeCommsAlertSystem();
        this.startAIMonitoring();
    }

    // Initialize content data
    initializeContentData() {
        return [
            {
                id: 1,
                title: "How to return an item for a refund",
                status: "draft",
                performance: { rating: 4.2, label: "Good", reviews: 1247 },
                views: { count: 45230, helpful: 89 },
                lastEdited: "2 hours ago",
                reviewers: ["SM", "LT"],
                workflow: "Serial",
                metadata: {
                    author: "John Doe",
                    createdAt: new Date('2025-01-20T10:00:00Z'),
                    lastModified: new Date('2025-01-22T12:00:00Z'),
                    publishedAt: null,
                    version: 3,
                    wordCount: 485,
                    readingTime: 3
                },
                versions: [
                    {
                        version: 1,
                        content: "Initial draft content...",
                        author: "John Doe",
                        timestamp: new Date('2025-01-20T10:00:00Z'),
                        changes: ["Initial creation"]
                    },
                    {
                        version: 2,
                        content: "Updated with more details...",
                        author: "John Doe",
                        timestamp: new Date('2025-01-21T14:30:00Z'),
                        changes: ["Added step-by-step instructions", "Improved formatting"]
                    },
                    {
                        version: 3,
                        content: "Current version with latest updates...",
                        author: "John Doe",
                        timestamp: new Date('2025-01-22T12:00:00Z'),
                        changes: ["Enhanced clarity", "Added compliance notes"]
                    }
                ],
                publishedUrl: null,
                socialShares: {
                    facebook: 0,
                    twitter: 0,
                    linkedin: 0
                },
                content: `
                    <h1>How to Return an Item for a Refund</h1>
                    <p>Returning an item on eBay is straightforward and buyer-friendly. This comprehensive guide will walk you through the entire process, from initiating a return to receiving your refund.</p>
                    
                    <h2>When You Can Return an Item</h2>
                    <p>You can return an item if:</p>
                    <ul>
                        <li>The item doesn't match the description provided in the listing</li>
                        <li>The item is damaged, defective, or not working properly</li>
                        <li>You received the wrong item or a different item than ordered</li>
                        <li>The seller accepts returns (check the return policy in the listing)</li>
                        <li>The item was significantly not as described</li>
                    </ul>
                    
                    <h2>Return Time Limits</h2>
                    <p>Most items can be returned within 30 days of delivery, but some categories have different timeframes:</p>
                    <ul>
                        <li><strong>Standard items:</strong> 30 days</li>
                        <li><strong>Electronics:</strong> 30 days</li>
                        <li><strong>Vehicles:</strong> 7 days</li>
                        <li><strong>Real Estate:</strong> 3 days</li>
                    </ul>
                    
                    <h2>How to Start a Return</h2>
                    <ol>
                        <li>Go to your <strong>Purchase history</strong> in My eBay</li>
                        <li>Find the item and select <strong>Return this item</strong></li>
                        <li>Choose your reason for returning from the dropdown menu</li>
                        <li>Add any additional details about the issue</li>
                        <li>Upload photos if the item is damaged or not as described</li>
                        <li>Submit your return request</li>
                    </ol>
                    
                    <h2>What Happens Next</h2>
                    <p>After you submit your return request:</p>
                    <ul>
                        <li>The seller has 3 business days to respond to your request</li>
                        <li>If approved, you'll receive a prepaid return shipping label</li>
                        <li>Package the item securely in its original packaging if possible</li>
                        <li>Drop off the package at the designated shipping location</li>
                        <li>Your refund will be processed once the seller receives and inspects the item</li>
                        <li>Refunds typically appear in your account within 3-5 business days</li>
                    </ul>
                    
                    <h2>Return Shipping Costs</h2>
                    <p>Who pays for return shipping depends on the reason for the return:</p>
                    <ul>
                        <li><strong>Item not as described:</strong> Seller pays return shipping</li>
                        <li><strong>Buyer's remorse:</strong> Buyer typically pays return shipping</li>
                        <li><strong>Defective item:</strong> Seller pays return shipping</li>
                    </ul>
                    
                    <h2>Need Help?</h2>
                    <p>If you're having trouble with your return or the seller isn't responding, you can:</p>
                    <ul>
                        <li>Contact eBay Customer Service</li>
                        <li>Open a case in the Resolution Center</li>
                        <li>Use eBay's Money Back Guarantee protection</li>
                    </ul>
                `
            },
            {
                id: 2,
                title: "eBay Money Back Guarantee - Buyer Protection",
                status: "review",
                performance: { rating: 4.7, label: "Excellent", reviews: 2156 },
                views: { count: 78420, helpful: 94 },
                lastEdited: "1 day ago",
                reviewers: ["MK", "LT", "O"],
                workflow: "Parallel",
                metadata: {
                    author: "Sarah Miller",
                    createdAt: new Date('2025-01-18T09:00:00Z'),
                    lastModified: new Date('2025-01-21T16:30:00Z'),
                    publishedAt: null,
                    version: 2,
                    wordCount: 620,
                    readingTime: 4
                },
                content: `
                    <h1>eBay Money Back Guarantee - Complete Buyer Protection</h1>
                    <p>eBay's Money Back Guarantee ensures that you get the item you ordered, or your money back. This comprehensive protection covers virtually all purchases on eBay.</p>
                    
                    <h2>What's Covered</h2>
                    <p>eBay Money Back Guarantee protects you when:</p>
                    <ul>
                        <li>You don't receive your item</li>
                        <li>The item you received is significantly different from the listing description</li>
                        <li>The item is damaged, defective, or doesn't work</li>
                        <li>The seller used a different shipping service than stated</li>
                        <li>The item was delivered to the wrong address</li>
                    </ul>
                    
                    <h2>How to File a Claim</h2>
                    <ol>
                        <li>Wait for the estimated delivery date to pass</li>
                        <li>Contact the seller first to try to resolve the issue</li>
                        <li>If no resolution after 3 business days, open a case in the Resolution Center</li>
                        <li>Provide all relevant details and evidence</li>
                        <li>eBay will review your case and make a decision</li>
                    </ol>
                    
                    <h2>Timeline for Claims</h2>
                    <p>You have specific timeframes to report issues:</p>
                    <ul>
                        <li><strong>Item not received:</strong> 30 days after estimated delivery</li>
                        <li><strong>Item not as described:</strong> 30 days after delivery</li>
                        <li><strong>Significantly not as described:</strong> 30 days after delivery</li>
                    </ul>
                    
                    <h2>What Happens After You File</h2>
                    <p>Once you open a case:</p>
                    <ul>
                        <li>eBay will contact the seller on your behalf</li>
                        <li>The seller has 3 business days to respond</li>
                        <li>If the seller doesn't respond or resolve the issue, eBay will step in</li>
                        <li>eBay may issue a full refund, including original shipping costs</li>
                        <li>In some cases, you may need to return the item</li>
                    </ul>
                    
                    <h2>Exclusions</h2>
                    <p>The Money Back Guarantee doesn't cover:</p>
                    <ul>
                        <li>Items picked up in person</li>
                        <li>Vehicles (covered by separate Vehicle Purchase Protection)</li>
                        <li>Real estate</li>
                        <li>Businesses for sale</li>
                        <li>Industrial equipment over $25,000</li>
                        <li>Items in prohibited categories</li>
                    </ul>
                `
            },
            {
                id: 3,
                title: "Understanding refund timelines and payment methods",
                status: "published",
                performance: { rating: 3.9, label: "Average", reviews: 892 },
                views: { count: 32150, helpful: 78 },
                lastEdited: "3 days ago",
                reviewers: ["LT", "PT"],
                workflow: "Serial",
                metadata: {
                    author: "Mike Kumar",
                    createdAt: new Date('2025-01-15T11:00:00Z'),
                    lastModified: new Date('2025-01-19T14:00:00Z'),
                    publishedAt: new Date('2025-01-19T16:00:00Z'),
                    version: 1,
                    wordCount: 445,
                    readingTime: 3
                },
                content: `
                    <h1>Understanding Refund Timelines and Payment Methods</h1>
                    <p>When you return an item or receive a refund through eBay, the timeline and method depend on several factors. Here's what you need to know.</p>
                    
                    <h2>Refund Processing Times</h2>
                    <p>Refund timelines vary based on your original payment method:</p>
                    
                    <h3>PayPal Payments</h3>
                    <ul>
                        <li><strong>Instant refunds:</strong> Available for eligible transactions</li>
                        <li><strong>Standard refunds:</strong> 1-3 business days</li>
                        <li><strong>Bank transfers:</strong> 3-5 business days</li>
                    </ul>
                    
                    <h3>Credit Card Payments</h3>
                    <ul>
                        <li><strong>Processing time:</strong> 3-5 business days</li>
                        <li><strong>Bank posting:</strong> Additional 1-2 billing cycles</li>
                        <li><strong>Total time:</strong> Up to 30 days in some cases</li>
                    </ul>
                    
                    <h3>Debit Card Payments</h3>
                    <ul>
                        <li><strong>Processing time:</strong> 3-5 business days</li>
                        <li><strong>Bank posting:</strong> 1-3 business days</li>
                        <li><strong>Total time:</strong> Up to 10 business days</li>
                    </ul>
                    
                    <h2>Factors Affecting Refund Speed</h2>
                    <p>Several factors can impact how quickly you receive your refund:</p>
                    <ul>
                        <li>Your bank's processing policies</li>
                        <li>The seller's response time</li>
                        <li>Whether the item needs to be returned first</li>
                        <li>The complexity of the case</li>
                        <li>Weekends and holidays</li>
                    </ul>
                    
                    <h2>Tracking Your Refund</h2>
                    <p>You can monitor your refund status by:</p>
                    <ul>
                        <li>Checking your eBay account under "Purchase history"</li>
                        <li>Looking for email notifications from eBay</li>
                        <li>Monitoring your payment method account</li>
                        <li>Contacting customer service if needed</li>
                    </ul>
                    
                    <h2>What to Do If Your Refund Is Delayed</h2>
                    <p>If your refund is taking longer than expected:</p>
                    <ol>
                        <li>Check with your bank or payment provider</li>
                        <li>Verify the refund was processed by eBay</li>
                        <li>Contact eBay customer service</li>
                        <li>Keep all documentation and case numbers</li>
                    </ol>
                `
            },
            {
                id: 4,
                title: "Return shipping options and costs",
                status: "draft",
                performance: { rating: 3.6, label: "Average", reviews: 634 },
                views: { count: 18920, helpful: 72 },
                lastEdited: "5 hours ago",
                reviewers: ["O", "CS"],
                workflow: "Serial",
                metadata: {
                    author: "Lisa Chen",
                    createdAt: new Date('2025-01-22T08:00:00Z'),
                    lastModified: new Date('2025-01-22T13:00:00Z'),
                    publishedAt: null,
                    version: 1,
                    wordCount: 380,
                    readingTime: 2
                },
                content: `
                    <h1>Return Shipping Options and Costs</h1>
                    <p>Understanding your return shipping options and who pays for return shipping is crucial when returning items on eBay.</p>
                    
                    <h2>Who Pays for Return Shipping?</h2>
                    <p>Return shipping costs depend on the reason for your return:</p>
                    
                    <h3>Seller Pays Return Shipping</h3>
                    <ul>
                        <li>Item significantly not as described</li>
                        <li>Item arrived damaged or defective</li>
                        <li>Wrong item was sent</li>
                        <li>Item doesn't match the listing photos</li>
                        <li>Missing parts or accessories</li>
                    </ul>
                    
                    <h3>Buyer Pays Return Shipping</h3>
                    <ul>
                        <li>Changed your mind about the purchase</li>
                        <li>Ordered wrong size or color</li>
                        <li>Found a better price elsewhere</li>
                        <li>No longer need the item</li>
                    </ul>
                    
                    <h2>Return Shipping Methods</h2>
                    <p>eBay provides several convenient return shipping options:</p>
                    
                    <h3>Prepaid Return Labels</h3>
                    <ul>
                        <li>Automatically generated for eligible returns</li>
                        <li>Print at home or have it emailed to you</li>
                        <li>Drop off at designated shipping locations</li>
                        <li>Tracking included for your protection</li>
                    </ul>
                    
                    <h3>QR Code Returns</h3>
                    <ul>
                        <li>No need to print labels</li>
                        <li>Show QR code at participating locations</li>
                        <li>Available at UPS, FedEx, and USPS locations</li>
                        <li>Package and label created on-site</li>
                    </ul>
                    
                    <h2>Return Shipping Costs</h2>
                    <p>When you're responsible for return shipping, costs typically range:</p>
                    <ul>
                        <li><strong>Small items:</strong> $3-8 via USPS</li>
                        <li><strong>Medium items:</strong> $8-15 via UPS/FedEx</li>
                        <li><strong>Large items:</strong> $15-50+ depending on size and weight</li>
                        <li><strong>Freight items:</strong> $50-200+ for oversized items</li>
                    </ul>
                    
                    <h2>Tips to Minimize Return Shipping Costs</h2>
                    <ul>
                        <li>Use the original packaging when possible</li>
                        <li>Compare shipping rates between carriers</li>
                        <li>Consider insurance for valuable items</li>
                        <li>Keep tracking information until refund is complete</li>
                    </ul>
                `
            },
            {
                id: 5,
                title: "Managing account settings and preferences",
                status: "published",
                performance: { rating: 4.4, label: "Good", reviews: 1523 },
                views: { count: 56780, helpful: 86 },
                lastEdited: "1 week ago",
                reviewers: ["TT", "UT"],
                workflow: "Parallel",
                metadata: {
                    author: "David Park",
                    createdAt: new Date('2025-01-10T10:00:00Z'),
                    lastModified: new Date('2025-01-15T12:00:00Z'),
                    publishedAt: new Date('2025-01-15T14:00:00Z'),
                    version: 2,
                    wordCount: 520,
                    readingTime: 3
                },
                content: `
                    <h1>Managing Your eBay Account Settings and Preferences</h1>
                    <p>Customize your eBay experience by managing your account settings and preferences. This guide covers all the essential settings you should know about.</p>
                    
                    <h2>Account Information</h2>
                    <p>Keep your basic account information up to date:</p>
                    <ul>
                        <li><strong>Personal information:</strong> Name, address, phone number</li>
                        <li><strong>Email preferences:</strong> Choose which emails you receive</li>
                        <li><strong>Password security:</strong> Use strong, unique passwords</li>
                        <li><strong>Two-factor authentication:</strong> Add extra security to your account</li>
                    </ul>
                    
                    <h2>Payment Methods</h2>
                    <p>Manage your payment options for seamless transactions:</p>
                    <ul>
                        <li>Add or remove credit/debit cards</li>
                        <li>Set up PayPal integration</li>
                        <li>Configure automatic payment methods</li>
                        <li>Set spending limits and controls</li>
                    </ul>
                    
                    <h2>Shipping Addresses</h2>
                    <p>Maintain accurate shipping information:</p>
                    <ul>
                        <li>Add multiple shipping addresses</li>
                        <li>Set a default shipping address</li>
                        <li>Include special delivery instructions</li>
                        <li>Verify addresses for international shipping</li>
                    </ul>
                    
                    <h2>Communication Preferences</h2>
                    <p>Control how eBay communicates with you:</p>
                    <ul>
                        <li><strong>Email notifications:</strong> Bidding updates, purchase confirmations</li>
                        <li><strong>Text messages:</strong> Delivery notifications, security alerts</li>
                        <li><strong>Push notifications:</strong> Mobile app alerts</li>
                        <li><strong>Marketing emails:</strong> Promotional offers and deals</li>
                    </ul>
                    
                    <h2>Privacy Settings</h2>
                    <p>Protect your privacy with these settings:</p>
                    <ul>
                        <li>Control who can see your feedback</li>
                        <li>Manage your bidding history visibility</li>
                        <li>Set preferences for seller communications</li>
                        <li>Configure data sharing options</li>
                    </ul>
                    
                    <h2>Selling Preferences</h2>
                    <p>If you sell on eBay, customize these settings:</p>
                    <ul>
                        <li>Default listing preferences</li>
                        <li>Automatic feedback settings</li>
                        <li>Return policy templates</li>
                        <li>Shipping calculator preferences</li>
                    </ul>
                    
                    <h2>Security Features</h2>
                    <p>Enhance your account security:</p>
                    <ul>
                        <li><strong>Two-factor authentication:</strong> Require phone verification</li>
                        <li><strong>Login alerts:</strong> Get notified of suspicious activity</li>
                        <li><strong>Secure checkout:</strong> Use eBay's secure payment system</li>
                        <li><strong>Account recovery:</strong> Set up backup contact methods</li>
                    </ul>
                    
                    <h2>How to Access Your Settings</h2>
                    <ol>
                        <li>Sign in to your eBay account</li>
                        <li>Click on "My eBay" in the top navigation</li>
                        <li>Select "Account" from the dropdown menu</li>
                        <li>Choose the specific settings category you want to modify</li>
                        <li>Make your changes and save</li>
                    </ol>
                `
            },
            {
                id: 6,
                title: "Seller Performance Standards and Best Practices",
                status: "published",
                performance: { rating: 4.6, label: "Excellent", reviews: 1834 },
                views: { count: 67890, helpful: 91 },
                lastEdited: "4 days ago",
                reviewers: ["SM", "LT", "PT"],
                workflow: "Serial",
                metadata: {
                    author: "Jennifer Walsh",
                    createdAt: new Date('2025-01-12T09:00:00Z'),
                    lastModified: new Date('2025-01-18T15:30:00Z'),
                    publishedAt: new Date('2025-01-18T17:00:00Z'),
                    version: 3,
                    wordCount: 680,
                    readingTime: 4
                },
                content: `
                    <h1>Seller Performance Standards and Best Practices</h1>
                    <p>Maintaining high seller performance standards is crucial for success on eBay. This guide outlines the key metrics and best practices every seller should follow.</p>
                    
                    <h2>Key Performance Metrics</h2>
                    <p>eBay evaluates sellers based on several important metrics:</p>
                    
                    <h3>Defect Rate</h3>
                    <ul>
                        <li><strong>Target:</strong> Less than 2% of transactions</li>
                        <li><strong>Includes:</strong> Cases, returns for "item not as described," negative feedback</li>
                        <li><strong>Impact:</strong> High defect rates can lead to seller restrictions</li>
                    </ul>
                    
                    <h3>Late Shipment Rate</h3>
                    <ul>
                        <li><strong>Target:</strong> Less than 3% of transactions</li>
                        <li><strong>Measurement:</strong> Items shipped after handling time</li>
                        <li><strong>Tracking:</strong> Must upload tracking within handling time</li>
                    </ul>
                    
                    <h3>Valid Tracking Rate</h3>
                    <ul>
                        <li><strong>Target:</strong> 95% or higher</li>
                        <li><strong>Requirement:</strong> Upload valid tracking information</li>
                        <li><strong>Exceptions:</strong> Local pickup and some international shipments</li>
                    </ul>
                    
                    <h2>Best Practices for High Performance</h2>
                    
                    <h3>Accurate Listings</h3>
                    <ul>
                        <li>Use clear, detailed descriptions</li>
                        <li>Include high-quality photos from multiple angles</li>
                        <li>Specify condition accurately</li>
                        <li>List all included accessories and parts</li>
                        <li>Mention any defects or wear</li>
                    </ul>
                    
                    <h3>Fast and Reliable Shipping</h3>
                    <ul>
                        <li>Set realistic handling times</li>
                        <li>Ship items promptly</li>
                        <li>Use reliable shipping services</li>
                        <li>Provide tracking information immediately</li>
                        <li>Package items securely</li>
                    </ul>
                    
                    <h3>Excellent Customer Service</h3>
                    <ul>
                        <li>Respond to messages within 24 hours</li>
                        <li>Be professional and courteous</li>
                        <li>Resolve issues quickly and fairly</li>
                        <li>Offer reasonable return policies</li>
                        <li>Follow up on transactions</li>
                    </ul>
                    
                    <h2>Managing Returns and Cases</h2>
                    <p>Handle returns professionally to maintain good standing:</p>
                    <ul>
                        <li>Accept returns when appropriate</li>
                        <li>Respond to return requests promptly</li>
                        <li>Provide prepaid return labels when required</li>
                        <li>Process refunds quickly after receiving returns</li>
                        <li>Communicate clearly throughout the process</li>
                    </ul>
                    
                    <h2>Consequences of Poor Performance</h2>
                    <p>Sellers who don't meet standards may face:</p>
                    <ul>
                        <li>Search visibility restrictions</li>
                        <li>Selling limits or restrictions</li>
                        <li>Loss of Top Rated Seller status</li>
                        <li>Higher final value fees</li>
                        <li>Account suspension in severe cases</li>
                    </ul>
                    
                    <h2>Monitoring Your Performance</h2>
                    <p>Stay on top of your metrics by:</p>
                    <ul>
                        <li>Checking your Seller Dashboard regularly</li>
                        <li>Setting up performance alerts</li>
                        <li>Reviewing monthly performance reports</li>
                        <li>Tracking trends over time</li>
                        <li>Taking corrective action when needed</li>
                    </ul>
                `
            },
            {
                id: 7,
                title: "International Shipping Guide for Buyers",
                status: "draft",
                performance: { rating: 0, label: "New", reviews: 0 },
                views: { count: 0, helpful: 0 },
                lastEdited: "1 hour ago",
                reviewers: ["CS", "LT"],
                workflow: "Parallel",
                metadata: {
                    author: "Maria Rodriguez",
                    createdAt: new Date('2025-01-22T14:00:00Z'),
                    lastModified: new Date('2025-01-22T17:00:00Z'),
                    publishedAt: null,
                    version: 1,
                    wordCount: 425,
                    readingTime: 3
                },
                content: `
                    <h1>International Shipping Guide for Buyers</h1>
                    <p>Buying from international sellers on eBay opens up a world of unique items and great deals. Here's everything you need to know about international purchases.</p>
                    
                    <h2>Before You Buy</h2>
                    <p>Consider these factors when buying internationally:</p>
                    <ul>
                        <li><strong>Shipping costs:</strong> Often higher than domestic shipping</li>
                        <li><strong>Delivery time:</strong> Can take 1-4 weeks or longer</li>
                        <li><strong>Customs duties:</strong> May apply depending on item value and type</li>
                        <li><strong>Return shipping:</strong> Can be expensive for international returns</li>
                        <li><strong>Currency conversion:</strong> Your bank may charge conversion fees</li>
                    </ul>
                    
                    <h2>Understanding Shipping Options</h2>
                    
                    <h3>Standard International Shipping</h3>
                    <ul>
                        <li>Most economical option</li>
                        <li>Delivery time: 2-4 weeks</li>
                        <li>Limited tracking in some countries</li>
                        <li>No insurance included</li>
                    </ul>
                    
                    <h3>Express International Shipping</h3>
                    <ul>
                        <li>Faster delivery: 3-7 business days</li>
                        <li>Full tracking and insurance</li>
                        <li>Higher cost but more reliable</li>
                        <li>Signature confirmation included</li>
                    </ul>
                    
                    <h2>Customs and Duties</h2>
                    <p>International purchases may be subject to:</p>
                    <ul>
                        <li><strong>Import duties:</strong> Percentage of item value</li>
                        <li><strong>Sales tax/VAT:</strong> Local tax rates apply</li>
                        <li><strong>Handling fees:</strong> Charged by customs or delivery service</li>
                        <li><strong>Prohibited items:</strong> Some items cannot be imported</li>
                    </ul>
                    
                    <h2>eBay International Shipping Program</h2>
                    <p>Many sellers use eBay's international shipping program:</p>
                    <ul>
                        <li>Items shipped to eBay's shipping center first</li>
                        <li>eBay handles international shipping and customs</li>
                        <li>Duties and taxes calculated at checkout</li>
                        <li>Faster and more reliable delivery</li>
                        <li>Better buyer protection</li>
                    </ul>
                    
                    <h2>Tips for International Buying</h2>
                    <ul>
                        <li>Check seller's international shipping policies</li>
                        <li>Verify your address is correct and complete</li>
                        <li>Research your country's import restrictions</li>
                        <li>Consider total cost including duties and taxes</li>
                        <li>Be patient with delivery times</li>
                        <li>Keep all documentation until item arrives</li>
                    </ul>
                    
                    <h2>If Something Goes Wrong</h2>
                    <p>International purchases are still covered by eBay's protections:</p>
                    <ul>
                        <li>Money Back Guarantee applies</li>
                        <li>Contact seller first for issues</li>
                        <li>Open a case if seller doesn't respond</li>
                        <li>eBay will step in to help resolve disputes</li>
                    </ul>
                `
            },
            {
                id: 8,
                title: "Mobile App Features and Tips",
                status: "review",
                performance: { rating: 4.1, label: "Good", reviews: 967 },
                views: { count: 23450, helpful: 83 },
                lastEdited: "6 hours ago",
                reviewers: ["TT", "UT", "SM"],
                workflow: "Parallel",
                metadata: {
                    author: "Alex Thompson",
                    createdAt: new Date('2025-01-21T11:00:00Z'),
                    lastModified: new Date('2025-01-22T12:00:00Z'),
                    publishedAt: null,
                    version: 2,
                    wordCount: 390,
                    readingTime: 2
                },
                content: `
                    <h1>eBay Mobile App Features and Tips</h1>
                    <p>The eBay mobile app offers a convenient way to buy, sell, and manage your eBay activities on the go. Discover all the features and tips to maximize your mobile experience.</p>
                    
                    <h2>Key Mobile App Features</h2>
                    
                    <h3>Shopping Features</h3>
                    <ul>
                        <li><strong>Visual search:</strong> Take photos to find similar items</li>
                        <li><strong>Barcode scanner:</strong> Scan products to find them on eBay</li>
                        <li><strong>Push notifications:</strong> Get alerts for bidding and purchases</li>
                        <li><strong>Saved searches:</strong> Get notified when new items match your criteria</li>
                        <li><strong>Watch list:</strong> Keep track of items you're interested in</li>
                    </ul>
                    
                    <h3>Selling Features</h3>
                    <ul>
                        <li><strong>Quick listing:</strong> Create listings in minutes</li>
                        <li><strong>Photo editing:</strong> Enhance your listing photos</li>
                        <li><strong>Inventory management:</strong> Track your active listings</li>
                        <li><strong>Message center:</strong> Communicate with buyers instantly</li>
                        <li><strong>Sales analytics:</strong> Monitor your performance</li>
                    </ul>
                    
                    <h2>Mobile-Exclusive Features</h2>
                    <ul>
                        <li><strong>Shake to search:</strong> Shake your phone for random deals</li>
                        <li><strong>Location-based results:</strong> Find items near you</li>
                        <li><strong>Touch ID/Face ID:</strong> Secure and quick login</li>
                        <li><strong>Mobile-only deals:</strong> Exclusive offers for app users</li>
                    </ul>
                    
                    <h2>Tips for Mobile Success</h2>
                    
                    <h3>For Buyers</h3>
                    <ul>
                        <li>Enable push notifications for bidding updates</li>
                        <li>Use the visual search for hard-to-describe items</li>
                        <li>Set up saved searches with alerts</li>
                        <li>Check the app regularly for flash sales</li>
                        <li>Use mobile payment options for faster checkout</li>
                    </ul>
                    
                    <h3>For Sellers</h3>
                    <ul>
                        <li>Take high-quality photos with good lighting</li>
                        <li>Respond to messages quickly using the app</li>
                        <li>Use the quick listing feature for fast uploads</li>
                        <li>Monitor your listings and adjust prices as needed</li>
                        <li>Ship items promptly and update tracking</li>
                    </ul>
                    
                    <h2>Troubleshooting Common Issues</h2>
                    <ul>
                        <li><strong>App crashes:</strong> Update to the latest version</li>
                        <li><strong>Slow loading:</strong> Check your internet connection</li>
                        <li><strong>Login problems:</strong> Reset your password if needed</li>
                        <li><strong>Photo upload issues:</strong> Check camera permissions</li>
                        <li><strong>Payment problems:</strong> Verify your payment methods</li>
                    </ul>
                `
            },
            {
                id: 9,
                title: "GUIDE1195: Knives Policy - Prohibited and Restricted Items",
                status: "published",
                performance: { rating: 4.8, label: "Excellent", reviews: 2847 },
                views: { count: 125340, helpful: 96 },
                lastEdited: "2 days ago",
                reviewers: ["LT", "CS", "PT"],
                workflow: "Serial",
                metadata: {
                    author: "Policy Team",
                    createdAt: new Date('2025-01-10T09:00:00Z'),
                    lastModified: new Date('2025-01-20T14:30:00Z'),
                    publishedAt: new Date('2025-01-20T16:00:00Z'),
                    version: 4,
                    wordCount: 1250,
                    readingTime: 6,
                    guideId: "GUIDE1195",
                    category: "Policy",
                    compliance: "Legal Approved"
                },
                versions: [
                    {
                        version: 1,
                        content: "Initial policy draft...",
                        author: "Policy Team",
                        timestamp: new Date('2025-01-10T09:00:00Z'),
                        changes: ["Initial creation", "Basic policy structure"]
                    },
                    {
                        version: 2,
                        content: "Updated with enforcement guidelines...",
                        author: "Policy Team",
                        timestamp: new Date('2025-01-15T11:00:00Z'),
                        changes: ["Added enforcement section", "Visual identification guide"]
                    },
                    {
                        version: 3,
                        content: "Enhanced with examples and exceptions...",
                        author: "Policy Team",
                        timestamp: new Date('2025-01-18T13:30:00Z'),
                        changes: ["Added exception examples", "Enhanced visual guide"]
                    },
                    {
                        version: 4,
                        content: "Final version with compliance review...",
                        author: "Policy Team",
                        timestamp: new Date('2025-01-20T14:30:00Z'),
                        changes: ["Legal compliance review", "Final formatting"]
                    }
                ],
                publishedUrl: "https://ebay.com/help/policies/prohibited-restricted-items/knives-policy",
                socialShares: {
                    facebook: 45,
                    twitter: 78,
                    linkedin: 23
                },
                content: `
                    <h1>GUIDE1195: Knives Policy - Prohibited and Restricted Items</h1>
                    
                    <div class="policy-header">
                        <div class="policy-meta">
                            <span class="policy-type">Informational</span>
                            <span class="policy-audience">All (customers, teammates, enforcement)</span>
                            <span class="policy-tags">knives-policy, informational, overview, compliance</span>
                        </div>
                    </div>

                    <h2>Section 1: Overview</h2>

                    <h3>Module 1.1: Policy Summary</h3>
                    <p>Only knives that follow our rules can be listed on eBay. No other knives are allowed.</p>

                    <h3>Module 1.2: What This Policy Covers</h3>
                    <p>This policy explains what knife-related items are not allowed on eBay. It also lists which knives are allowed if sellers follow all conditions.</p>

                    <h3>Module 1.3: Why We Have This Policy</h3>
                    <p>This policy helps ensure important government regulations are followed. For safety concerns and in order to follow laws and regulations, we restrict the types of weapons and accessories that can be sold on eBay. Be sure to follow all laws and regulations—as well as eBay policies—before buying or selling these items.</p>
                    
                    <p>Activity on eBay is required to follow this policy, the eBay User Agreement and all applicable laws, as well as respect the rights of third parties. If it doesn't, eBay may take action consistent with applicable laws and the eBay User Agreement, and may even be legally required to do so. Such actions may include, as an example only: Removing the listing or other content, issuing a warning, restricting activity or account suspension.</p>

                    <h2>Section 2: What's Not Allowed</h2>

                    <h3>Module 2.1: Prohibited Items</h3>
                    <p>The following or similar types of knives aren't allowed:</p>
                    <ul>
                        <li><strong>Automatic knives</strong></li>
                        <li><strong>Butterfly knives</strong></li>
                        <li><strong>Dual-action knives</strong></li>
                        <li><strong>Gravity knives</strong></li>
                        <li><strong>Out-the-front knives</strong></li>
                        <li><strong>Paratrooper knives</strong></li>
                        <li><strong>Push knives</strong></li>
                        <li><strong>Switchblade knives</strong></li>
                        <li><strong>Sword canes</strong></li>
                        <li><strong>Spring-assisted knives</strong> where there is no manual movement by a thumb stud or screw clearly visible on the blade</li>
                        <li><strong>Hidden or disguised knives</strong> such as writing pen knives or belt buckle knives</li>
                    </ul>

                    <h2>Section 3: What's Allowed</h2>

                    <h3>Module 3.1: Examples of Allowed Knives/Accessories</h3>
                    <p>All types of knives not in the previous list are allowed. The listing must also follow our international trading policy.</p>

                    <h2>Section 4: Country-Specific Rules</h2>
                    <p>The international sale of weapons is highly regulated. Before you list a weapon, please review the policies for each of the eBay sites where you wish to sell the item.</p>
                    <ul>
                        <li><strong>Throwing knives</strong> can only be shipped within the U.S. or Canada</li>
                        <li><strong>The sale of knives on eBay.co.uk and eBay.ie</strong> is prohibited with limited exceptions, even when worldwide shipping is enabled</li>
                    </ul>

                    <h2>Section 5: Internal Enforcement Guide</h2>

                    <h3>Module 5.1: Consequences</h3>
                    <ul>
                        <li>Listing removal</li>
                        <li>Account suspension for policy circumvention</li>
                        <li>If a prohibited knife is visible on the UK or IE site, they can be removed for violating the policy</li>
                    </ul>

                    <h3>Module 5.2: Key Identification Points</h3>
                    <div class="enforcement-checklist">
                        <h4>❌ Always Prohibited</h4>
                        <ul>
                            <li>Automatic/switchblade knives</li>
                            <li>Butterfly knives (with exceptions)</li>
                            <li>Hidden/disguised knives</li>
                            <li>Out-the-front (OTF) knives</li>
                            <li>Push daggers</li>
                            <li>Gravity knives</li>
                            <li>Sword canes</li>
                        </ul>

                        <h4>✅ Generally Allowed</h4>
                        <ul>
                            <li>Manual folding knives</li>
                            <li>Fixed blade knives</li>
                            <li>Kitchen/utility knives</li>
                            <li>Collectible knives</li>
                            <li>Hunting/fishing knives</li>
                            <li>Multi-tools with knives</li>
                        </ul>

                        <h4>🌍 Geographic Restrictions</h4>
                        <ul>
                            <li>Throwing knives: US/Canada only</li>
                            <li>UK/IE: Very limited exceptions</li>
                            <li>AU/EU: No spring-assist knives</li>
                        </ul>
                    </div>

                    <h2>Section 6: Escalations & Appeals</h2>

                    <h3>Module 6.1: Policy Downgrade and Exemptions</h3>
                    <p>This policy isn't eligible for a one-time exemption downgrade or appeal.</p>
                    <p>Escalate to your team lead if additional review is required.</p>

                    <div class="policy-footer">
                        <p><em>This guide is part of the Aira Platform content management system and should be used in conjunction with current eBay policies and legal requirements.</em></p>
                        <div class="policy-links">
                            <a href="docs/guides/knives-policy-guide.md" class="policy-link">📄 View Full Guide</a>
                            <a href="#" class="policy-link">🔗 eBay Policy Center</a>
                            <a href="#" class="policy-link">⚖️ Legal Resources</a>
                        </div>
                    </div>
                `
            }
        ];
    }

    // Initialize asset data
    initializeAssetData() {
        return [
            {
                id: 1,
                title: "Return Process Header",
                type: "text",
                category: "headers",
                content: "How to return an item for a refund",
                usage: 23,
                tags: ["returns", "header"],
                preview: "text"
            },
            {
                id: 2,
                title: "Return Process Diagram",
                type: "images",
                category: "media",
                url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
                usage: 15,
                tags: ["diagram", "process"],
                preview: "image"
            },
            {
                id: 3,
                title: "Return Tutorial Video",
                type: "videos",
                category: "media",
                url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
                usage: 8,
                tags: ["tutorial", "video"],
                preview: "video"
            },
            {
                id: 4,
                title: "Return Policy Template",
                type: "files",
                category: "templates",
                usage: 12,
                tags: ["template", "policy"],
                preview: "file",
                fileType: "PDF"
            },
            {
                id: 5,
                title: "Return CTA Button",
                type: "text",
                category: "ctas",
                content: "Start your return request",
                usage: 45,
                tags: ["cta", "button"],
                preview: "text"
            },
            {
                id: 6,
                title: "eBay Brand Logo",
                type: "images",
                category: "media",
                url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
                usage: 156,
                tags: ["logo", "brand"],
                preview: "image"
            },
            {
                id: 7,
                title: "Knives Policy Guide",
                type: "files",
                category: "templates",
                content: "GUIDE1195: Comprehensive knives policy covering prohibited and allowed knife types on eBay",
                usage: 8,
                tags: ["policy", "knives", "guide", "compliance", "enforcement"],
                preview: "file",
                fileType: "GUIDE",
                guideId: "GUIDE1195",
                url: "docs/guides/knives-policy-guide.md"
            },
            {
                id: 8,
                title: "Policy Compliance Header",
                type: "text",
                category: "headers",
                content: "Policy Compliance and Enforcement Guidelines",
                usage: 12,
                tags: ["policy", "compliance", "header"],
                preview: "text"
            },
            {
                id: 9,
                title: "Prohibited Items Warning",
                type: "text",
                category: "ctas",
                content: "⚠️ This item type is prohibited on eBay. Please review our policy guidelines.",
                usage: 25,
                tags: ["warning", "prohibited", "policy"],
                preview: "text"
            }
        ];
    }

    // Navigation functionality
    initializeNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetView = link.getAttribute('data-view');
                this.switchView(targetView);
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    // View switching functionality
    switchView(viewName) {
        // Hide all views
        const views = document.querySelectorAll('.view');
        views.forEach(view => view.classList.remove('active'));
        
        // Show target view
        const targetView = document.getElementById(`${viewName}-view`);
        if (targetView) {
            targetView.classList.add('active');
            this.currentView = viewName;
            
            // Initialize view-specific functionality
            this.initializeViewSpecific(viewName);
        }
    }

    // Initialize view-specific functionality
    initializeViewSpecific(viewName) {
        switch (viewName) {
            case 'dashboard':
                this.updateContentTable();
                break;
            case 'editor':
                this.initializeEditorSpecific();
                break;
            case 'assets':
                this.renderAssets();
                break;
            case 'workflows':
                this.initializeWorkflowsSpecific();
                break;
        }
    }

    // Content table functionality
    initializeContentTable() {
        // Tab switching
        const tabBtns = document.querySelectorAll('.content-tabs .tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterContent(btn.getAttribute('data-tab'));
            });
        });

        // Search functionality
        const searchInput = document.getElementById('content-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchContent(e.target.value);
            });
        }

        // Create New Content button
        const createContentBtn = document.querySelector('.create-content-btn');
        if (createContentBtn) {
            createContentBtn.addEventListener('click', () => {
                this.createNewContent();
            });
        }

        // Manage Approvers button
        const manageApproversBtn = document.querySelector('.manage-approvers-btn');
        if (manageApproversBtn) {
            manageApproversBtn.addEventListener('click', () => {
                this.showApproverManagementModal();
            });
        }

        // Action buttons
        this.initializeContentActions();
    }

    initializeContentActions() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.view-btn')) {
                const row = e.target.closest('.content-row');
                const contentId = parseInt(row.getAttribute('data-id'));
                this.viewContent(contentId);
            } else if (e.target.closest('.edit-btn')) {
                const row = e.target.closest('.content-row');
                const contentId = parseInt(row.getAttribute('data-id'));
                this.editContent(contentId);
            } else if (e.target.closest('.delete-btn')) {
                const row = e.target.closest('.content-row');
                const contentId = parseInt(row.getAttribute('data-id'));
                this.deleteContent(contentId);
            }
        });
    }

    updateContentTable() {
        const tbody = document.getElementById('content-table-body');
        if (!tbody) return;

        tbody.innerHTML = this.contentData.map(item => `
            <tr class="content-row" data-id="${item.id}">
                <td class="title-cell">
                    <div class="content-title">${item.title}</div>
                </td>
                <td>
                    <span class="status-badge status-${item.status}">${this.formatStatus(item.status)}</span>
                </td>
                <td class="performance-cell">
                    <div class="rating-stars small">
                        ${this.renderStars(item.performance.rating)}
                    </div>
                    <span class="rating-value">${item.performance.rating}</span>
                    <div class="performance-label">${item.performance.label}</div>
                    <div class="review-count">${item.performance.reviews} reviews</div>
                </td>
                <td class="views-cell">
                    <div class="view-count">${item.views.count.toLocaleString()}</div>
                    <div class="view-percentage">${item.views.helpful}% helpful</div>
                </td>
                <td class="time-cell">
                    <div class="time-value">${item.lastEdited}</div>
                </td>
                <td class="reviewers-cell">
                    <div class="reviewer-tags">
                        ${item.reviewers.map(r => `<span class="reviewer-tag">${r}</span>`).join('')}
                    </div>
                </td>
                <td>
                    <span class="workflow-type">${item.workflow}</span>
                </td>
                <td class="actions-cell">
                    <button class="action-btn view-btn" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn edit-btn" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete-btn" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        return stars;
    }

    formatStatus(status) {
        const statusMap = {
            'draft': 'Draft',
            'review': 'In Review',
            'published': 'Published'
        };
        return statusMap[status] || status;
    }

    filterContent(tab) {
        let filteredData = [...this.contentData];
        
        switch (tab) {
            case 'all':
                // Show all content
                break;
            case 'review':
                filteredData = filteredData.filter(c => c.status === 'review');
                break;
            case 'published':
                filteredData = filteredData.filter(c => c.status === 'published');
                break;
            case 'tasks':
                filteredData = filteredData.filter(c => c.reviewers && c.reviewers.length > 0);
                break;
            case 'drafts':
            default:
                filteredData = filteredData.filter(c => c.status === 'draft');
                break;
        }
        
        this.renderFilteredContent(filteredData);
        this.updateTabCounts();
    }

    searchContent(query) {
        if (!query.trim()) {
            this.updateContentTable();
            return;
        }
        
        const filteredData = this.contentData.filter(content => 
            content.title.toLowerCase().includes(query.toLowerCase()) ||
            (content.content && content.content.toLowerCase().includes(query.toLowerCase()))
        );
        
        this.renderFilteredContent(filteredData);
    }

    renderFilteredContent(filteredData) {
        const tbody = document.getElementById('content-table-body');
        if (!tbody) return;

        if (filteredData.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="8" class="no-content">
                        <div class="no-content-message">
                            <i class="fas fa-search"></i>
                            <p>No content found matching your criteria</p>
                        </div>
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = filteredData.map(item => `
            <tr class="content-row" data-id="${item.id}">
                <td class="title-cell">
                    <div class="content-title">${item.title}</div>
                </td>
                <td>
                    <span class="status-badge status-${item.status}">${this.formatStatus(item.status)}</span>
                </td>
                <td class="performance-cell">
                    <div class="rating-stars small">
                        ${this.renderStars(item.performance.rating)}
                    </div>
                    <span class="rating-value">${item.performance.rating}</span>
                    <div class="performance-label">${item.performance.label}</div>
                    <div class="review-count">${item.performance.reviews} reviews</div>
                </td>
                <td class="views-cell">
                    <div class="view-count">${item.views.count.toLocaleString()}</div>
                    <div class="view-percentage">${item.views.helpful}% helpful</div>
                </td>
                <td class="time-cell">
                    <div class="time-value">${item.lastEdited}</div>
                </td>
                <td class="reviewers-cell">
                    <div class="reviewer-tags">
                        ${item.reviewers.map(r => `<span class="reviewer-tag" title="${this.getReviewerFullName(r)}">${r}</span>`).join('')}
                    </div>
                </td>
                <td>
                    <span class="workflow-type">${item.workflow}</span>
                </td>
                <td class="actions-cell">
                    <button class="action-btn view-btn" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn edit-btn" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete-btn" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    updateTabCounts() {
        const draftsCount = this.contentData.filter(c => c.status === 'draft').length;
        const reviewCount = this.contentData.filter(c => c.status === 'review').length;
        const publishedCount = this.contentData.filter(c => c.status === 'published').length;
        const tasksCount = this.contentData.filter(c => c.reviewers && c.reviewers.length > 0).length;

        // Update tab labels
        const tabBtns = document.querySelectorAll('.content-tabs .tab-btn');
        tabBtns.forEach(btn => {
            const tab = btn.getAttribute('data-tab');
            let count = 0;
            switch (tab) {
                case 'all':
                    count = this.contentData.length;
                    btn.textContent = `All Drafts (${count})`;
                    break;
                case 'review':
                    count = reviewCount;
                    btn.textContent = `Needs Review (${count})`;
                    break;
                case 'published':
                    count = publishedCount;
                    btn.textContent = `Published (${count})`;
                    break;
                case 'tasks':
                    count = tasksCount;
                    btn.textContent = `My Tasks (${count})`;
                    break;
            }
        });
    }

    getReviewerFullName(initials) {
        const reviewerMap = {
            'SM': 'Sarah Miller (Social Media)',
            'LT': 'Legal Team',
            'MK': 'Mike Kumar (Marketing)',
            'O': 'Operations Team',
            'PT': 'Product Team',
            'TT': 'Technical Team',
            'UT': 'User Experience Team',
            'CS': 'Customer Service'
        };
        return reviewerMap[initials] || initials;
    }

    viewContent(contentId) {
        const content = this.contentData.find(c => c.id === contentId);
        if (content) {
            this.showContentViewModal(content);
        }
    }

    editContent(contentId) {
        const content = this.contentData.find(c => c.id === contentId);
        if (content) {
            this.currentContent = content;
            this.switchView('editor');
            this.loadContentInEditor(content);
        }
    }

    deleteContent(contentId) {
        if (confirm('Are you sure you want to delete this content?')) {
            this.contentData = this.contentData.filter(c => c.id !== contentId);
            this.updateContentTable();
            this.showNotification('Content deleted successfully', 'success');
        }
    }

    // Editor functionality
    initializeEditor() {
        // Toolbar buttons
        const toolbarBtns = document.querySelectorAll('.toolbar-btn[data-command]');
        toolbarBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const command = btn.getAttribute('data-command');
                this.executeEditorCommand(command);
            });
        });

        // Heading select
        const headingSelect = document.getElementById('heading-select');
        if (headingSelect) {
            headingSelect.addEventListener('change', (e) => {
                this.formatHeading(e.target.value);
            });
        }

        // Special toolbar buttons
        this.initializeSpecialToolbarButtons();

        // Editor actions
        this.initializeEditorActions();

        // Prompt functionality
        this.initializePromptSection();

        // Auto-save
        this.initializeAutoSave();
    }

    initializeEditorSpecific() {
        // Load current content if available
        if (this.currentContent) {
            this.loadContentInEditor(this.currentContent);
        }
    }

    initializeSpecialToolbarButtons() {
        const insertLinkBtn = document.getElementById('insert-link-btn');
        const insertImageBtn = document.getElementById('insert-image-btn');
        const insertVideoBtn = document.getElementById('insert-video-btn');

        if (insertLinkBtn) {
            insertLinkBtn.addEventListener('click', () => this.insertLink());
        }
        if (insertImageBtn) {
            insertImageBtn.addEventListener('click', () => this.insertImage());
        }
        if (insertVideoBtn) {
            insertVideoBtn.addEventListener('click', () => this.insertVideo());
        }
    }

    initializeEditorActions() {
        const saveDraftBtn = document.querySelector('.save-draft-btn');
        const submitReviewBtn = document.querySelector('.submit-review-btn');
        const exportBtn = document.querySelector('.export-btn');

        if (saveDraftBtn) {
            saveDraftBtn.addEventListener('click', () => this.saveDraft());
        }
        if (submitReviewBtn) {
            submitReviewBtn.addEventListener('click', () => this.submitForReview());
        }
        if (exportBtn) {
            this.initializeExportMenu();
        }
    }

    initializePromptSection() {
        const promptInput = document.getElementById('prompt-input');
        const generateBtn = document.querySelector('.generate-content-btn');
        const refineBtn = document.querySelector('.refine-prompt-btn');
        const analyzeUrlBtn = document.querySelector('.analyze-url-btn');

        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.generateContent());
        }
        if (refineBtn) {
            refineBtn.addEventListener('click', () => this.refinePrompt());
        }
        if (analyzeUrlBtn) {
            analyzeUrlBtn.addEventListener('click', () => this.analyzeUrl());
        }

        // File upload
        this.initializeFileUpload();
    }

    initializeFileUpload() {
        const uploadArea = document.getElementById('upload-area');
        const fileInput = document.getElementById('file-input');

        if (uploadArea && fileInput) {
            uploadArea.addEventListener('click', () => fileInput.click());
            uploadArea.addEventListener('dragover', this.handleDragOver.bind(this));
            uploadArea.addEventListener('drop', this.handleFileDrop.bind(this));
            fileInput.addEventListener('change', this.handleFileSelect.bind(this));
        }
    }

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('dragover');
    }

    handleFileDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('dragover');
        const files = e.dataTransfer.files;
        this.processFiles(files);
    }

    handleFileSelect(e) {
        const files = e.target.files;
        this.processFiles(files);
    }

    processFiles(files) {
        Array.from(files).forEach(file => {
            console.log('Processing file:', file.name);
            this.showNotification(`File "${file.name}" uploaded successfully`, 'success');
        });
    }

    executeEditorCommand(command) {
        document.execCommand(command, false, null);
        this.showNotification(`Applied ${command} formatting`, 'info');
    }

    formatHeading(tag) {
        if (tag) {
            document.execCommand('formatBlock', false, tag);
            this.showNotification(`Applied ${tag.toUpperCase()} formatting`, 'info');
        }
    }

    insertLink() {
        const url = prompt('Enter URL:');
        if (url) {
            document.execCommand('createLink', false, url);
            this.showNotification('Link inserted', 'success');
        }
    }

    insertImage() {
        const url = prompt('Enter image URL:');
        if (url) {
            document.execCommand('insertImage', false, url);
            this.showNotification('Image inserted', 'success');
        }
    }

    insertVideo() {
        const url = prompt('Enter video URL:');
        if (url) {
            const videoEmbed = `<div class="video-embed"><iframe src="${url}" frameborder="0" allowfullscreen></iframe></div>`;
            document.execCommand('insertHTML', false, videoEmbed);
            this.showNotification('Video inserted', 'success');
        }
    }

    loadContentInEditor(content) {
        const editor = document.getElementById('main-editor');
        if (editor && content.content) {
            editor.innerHTML = content.content;
        }
    }

    saveDraft() {
        const editor = document.getElementById('main-editor');
        if (editor && this.currentContent) {
            this.currentContent.content = editor.innerHTML;
            this.showNotification('Draft saved successfully', 'success');
        }
    }

    submitForReview() {
        this.showWorkflowModal();
    }

    initializeExportMenu() {
        const exportOptions = document.querySelectorAll('.export-option');
        exportOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const format = option.textContent.trim();
                this.exportContent(format);
            });
        });
    }

    exportContent(format) {
        this.showNotification(`Exporting content as ${format}...`, 'info');
        setTimeout(() => {
            this.showNotification(`Content exported as ${format}`, 'success');
        }, 2000);
    }

    generateContent() {
        const promptInput = document.getElementById('prompt-input');
        const prompt = promptInput?.value.trim();
        
        if (!prompt) {
            this.showNotification('Please enter a prompt first', 'warning');
            return;
        }

        this.showNotification('Generating content...', 'info');
        this.setAIThinking(true);

        // Simulate AI content generation
        setTimeout(() => {
            const generatedContent = this.simulateContentGeneration(prompt);
            const editor = document.getElementById('main-editor');
            if (editor) {
                editor.innerHTML = generatedContent;
            }
            this.setAIThinking(false);
            this.showNotification('Content generated successfully', 'success');
        }, 3000);
    }

    simulateContentGeneration(prompt) {
        return `
            <h1>AI Generated Content</h1>
            <p>Based on your prompt: "${prompt}"</p>
            <p>This is AI-generated content that would be created based on your specific requirements. The content would be tailored to match eBay's brand voice and style guidelines.</p>
            
            <h2>Key Points</h2>
            <ul>
                <li>Professional and helpful tone</li>
                <li>Clear step-by-step instructions</li>
                <li>User-friendly language</li>
                <li>Compliance with eBay policies</li>
            </ul>
        `;
    }

    refinePrompt() {
        this.showNotification('Refining prompt with AI suggestions...', 'info');
    }

    analyzeUrl() {
        const urlInput = document.getElementById('url-input');
        const url = urlInput?.value.trim();
        
        if (!url) {
            this.showNotification('Please enter a URL first', 'warning');
            return;
        }

        this.showNotification('Analyzing URL content...', 'info');
        setTimeout(() => {
            this.showNotification('URL analysis complete', 'success');
        }, 2000);
    }

    initializeAutoSave() {
        const editor = document.getElementById('main-editor');
        if (editor) {
            let autoSaveTimer;
            editor.addEventListener('input', () => {
                clearTimeout(autoSaveTimer);
                autoSaveTimer = setTimeout(() => {
                    this.autoSave();
                }, 5000);
            });
        }
    }

    autoSave() {
        this.showNotification('Auto-saved', 'info');
    }

    // AI Assistant functionality
    initializeAIAssistant() {
        // Chat functionality
        this.initializeAIChat();
        
        // Quick actions
        this.initializeQuickActions();
        
        // Suggestion queue
        this.initializeSuggestionQueue();
    }

    initializeAIChat() {
        const chatInput = document.getElementById('ai-chat-input');
        const sendBtn = document.querySelector('.chat-send-btn');

        if (chatInput && sendBtn) {
            const sendMessage = () => {
                const message = chatInput.value.trim();
                if (message) {
                    this.addChatMessage(message, 'user');
                    chatInput.value = '';
                    this.processAIMessage(message);
                }
            };

            sendBtn.addEventListener('click', sendMessage);
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }
    }

    addChatMessage(message, sender) {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;
        
        if (sender === 'user') {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="message-content">
                    <p>${message}</p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <p>${message}</p>
                </div>
            `;
        }

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    processAIMessage(message) {
        this.setAIThinking(true);
        
        setTimeout(() => {
            const response = this.generateAIResponse(message);
            this.addChatMessage(response, 'ai');
            this.setAIThinking(false);
        }, 2000);
    }

    generateAIResponse(message) {
        const responses = [
            "I've analyzed your content and it looks great! The tone is professional and matches eBay's brand guidelines.",
            "Consider adding more specific examples to improve clarity for users.",
            "The content structure is excellent. You might want to add some visual elements to enhance user engagement.",
            "I notice this content could benefit from better SEO optimization. Would you like me to suggest some improvements?",
            "The compliance check shows everything is aligned with eBay policies. Great work!"
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }

    initializeQuickActions() {
        const actionBtns = document.querySelectorAll('.quick-actions .action-btn');
        actionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.className.split(' ').find(c => c.endsWith('-btn')).replace('-btn', '');
                this.executeQuickAction(action);
            });
        });
    }

    executeQuickAction(action) {
        this.setAIThinking(true);
        this.showNotification(`Applying ${action} action...`, 'info');
        
        setTimeout(() => {
            this.setAIThinking(false);
            this.showNotification(`${action} action completed`, 'success');
        }, 2000);
    }

    initializeSuggestionQueue() {
        const suggestionBtns = document.querySelectorAll('.suggestion-actions .btn');
        suggestionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = btn.textContent.trim().toLowerCase();
                const suggestionItem = btn.closest('.suggestion-item');
                this.handleSuggestionAction(action, suggestionItem);
            });
        });
    }

    handleSuggestionAction(action, suggestionItem) {
        switch (action) {
            case 'accept':
                this.showNotification('Suggestion applied', 'success');
                suggestionItem.style.opacity = '0.5';
                break;
            case 'ignore':
                this.showNotification('Suggestion ignored', 'info');
                suggestionItem.style.opacity = '0.5';
                break;
            case 'learn more':
                this.showAISuggestionsModal();
                break;
        }
    }

    setAIThinking(thinking) {
        this.aiThinking = thinking;
        const aiStatus = document.querySelector('.ai-status');
        if (aiStatus) {
            if (thinking) {
                aiStatus.classList.add('thinking');
            } else {
                aiStatus.classList.remove('thinking');
            }
        }
    }

    startAIMonitoring() {
        // Simulate real-time AI monitoring
        setInterval(() => {
            this.updateAIMonitoring();
        }, 10000);
    }

    updateAIMonitoring() {
        // Simulate monitoring updates
        const monitoringItems = document.querySelectorAll('.monitoring-item');
        monitoringItems.forEach(item => {
            const status = item.querySelector('.monitoring-status');
            if (status && Math.random() > 0.8) {
                // Randomly update status
                const statuses = ['good', 'warning', 'error'];
                const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                status.className = `monitoring-status ${randomStatus}`;
            }
        });
    }

    // Asset Library functionality
    initializeAssetLibrary() {
        // Search and filters
        this.initializeAssetFilters();
        
        // View toggle
        this.initializeAssetViewToggle();
        
        // Asset actions
        this.initializeAssetActions();
        
        // Upload asset functionality
        this.initializeAssetUpload();
    }

    initializeAssetUpload() {
        const uploadBtn = document.querySelector('.upload-asset-btn');
        if (uploadBtn) {
            uploadBtn.addEventListener('click', () => {
                this.showAssetUploadModal();
            });
        }
    }

    showAssetUploadModal() {
        // Create upload modal dynamically
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.id = 'asset-upload-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Upload Asset</h2>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="upload-form">
                        <div class="form-group">
                            <label>Asset Title</label>
                            <input type="text" id="asset-title" placeholder="Enter asset title...">
                        </div>
                        <div class="form-group">
                            <label>Asset Type</label>
                            <select id="asset-type">
                                <option value="text">Text Block</option>
                                <option value="images">Image</option>
                                <option value="videos">Video</option>
                                <option value="files">File</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Category</label>
                            <select id="asset-category">
                                <option value="headers">Headers</option>
                                <option value="ctas">CTAs</option>
                                <option value="media">Media</option>
                                <option value="templates">Templates</option>
                            </select>
                        </div>
                        <div class="form-group" id="text-content-group">
                            <label>Content</label>
                            <textarea id="asset-content" placeholder="Enter text content..."></textarea>
                        </div>
                        <div class="form-group" id="file-upload-group" style="display: none;">
                            <label>Upload File</label>
                            <div class="upload-area" id="asset-upload-area">
                                <div class="upload-content">
                                    <i class="fas fa-cloud-upload-alt"></i>
                                    <p>Drop file here or click to upload</p>
                                </div>
                                <input type="file" id="asset-file-input" accept="image/*,video/*,.pdf,.doc,.docx">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Tags (comma separated)</label>
                            <input type="text" id="asset-tags" placeholder="e.g. returns, header, help">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary cancel-upload-btn">Cancel</button>
                    <button class="btn btn-primary upload-asset-submit-btn">Upload Asset</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Initialize upload modal functionality
        this.initializeUploadModal(modal);
    }

    initializeUploadModal(modal) {
        // Close modal
        const closeBtn = modal.querySelector('.modal-close');
        const cancelBtn = modal.querySelector('.cancel-upload-btn');
        
        [closeBtn, cancelBtn].forEach(btn => {
            btn.addEventListener('click', () => {
                modal.remove();
            });
        });
        
        // Asset type change
        const assetTypeSelect = modal.querySelector('#asset-type');
        const textContentGroup = modal.querySelector('#text-content-group');
        const fileUploadGroup = modal.querySelector('#file-upload-group');
        
        assetTypeSelect.addEventListener('change', (e) => {
            if (e.target.value === 'text') {
                textContentGroup.style.display = 'block';
                fileUploadGroup.style.display = 'none';
            } else {
                textContentGroup.style.display = 'none';
                fileUploadGroup.style.display = 'block';
            }
        });
        
        // File upload
        const uploadArea = modal.querySelector('#asset-upload-area');
        const fileInput = modal.querySelector('#asset-file-input');
        
        uploadArea.addEventListener('click', () => fileInput.click());
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleAssetFileUpload(files[0], uploadArea);
            }
        });
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                this.handleAssetFileUpload(e.target.files[0], uploadArea);
            }
        });
        
        // Submit upload
        const submitBtn = modal.querySelector('.upload-asset-submit-btn');
        submitBtn.addEventListener('click', () => {
            this.submitAssetUpload(modal);
        });
    }

    handleAssetFileUpload(file, uploadArea) {
        // Show file preview
        uploadArea.innerHTML = `
            <div class="upload-content">
                <i class="fas fa-file"></i>
                <p>${file.name}</p>
                <span class="file-size">${this.formatFileSize(file.size)}</span>
            </div>
        `;
        uploadArea.dataset.fileName = file.name;
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    submitAssetUpload(modal) {
        const title = modal.querySelector('#asset-title').value.trim();
        const type = modal.querySelector('#asset-type').value;
        const category = modal.querySelector('#asset-category').value;
        const content = modal.querySelector('#asset-content').value.trim();
        const tags = modal.querySelector('#asset-tags').value.trim();
        const uploadArea = modal.querySelector('#asset-upload-area');
        
        if (!title) {
            this.showNotification('Please enter an asset title', 'warning');
            return;
        }
        
        if (type === 'text' && !content) {
            this.showNotification('Please enter text content', 'warning');
            return;
        }
        
        if (type !== 'text' && !uploadArea.dataset.fileName) {
            this.showNotification('Please upload a file', 'warning');
            return;
        }
        
        // Create new asset
        const newAsset = {
            id: this.assetData.length + 1,
            title: title,
            type: type,
            category: category,
            content: type === 'text' ? content : undefined,
            url: type !== 'text' ? 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' : undefined,
            usage: 0,
            tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
            preview: type === 'text' ? 'text' : type === 'images' ? 'image' : type === 'videos' ? 'video' : 'file',
            fileType: type === 'files' ? 'PDF' : undefined
        };
        
        // Add to asset data
        this.assetData.push(newAsset);
        
        // Re-render assets
        this.renderAssets();
        
        // Close modal
        modal.remove();
        
        // Show success notification
        this.showNotification(`Asset "${title}" uploaded successfully!`, 'success');
    }

    initializeAssetFilters() {
        const searchInput = document.getElementById('asset-search');
        const typeFilter = document.getElementById('asset-type-filter');
        const categoryFilter = document.getElementById('asset-category-filter');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterAssets({ search: e.target.value });
            });
        }

        if (typeFilter) {
            typeFilter.addEventListener('change', (e) => {
                this.filterAssets({ type: e.target.value });
            });
        }

        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.filterAssets({ category: e.target.value });
            });
        }
    }

    initializeAssetViewToggle() {
        const viewBtns = document.querySelectorAll('.view-toggle .view-btn');
        viewBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                viewBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const view = btn.getAttribute('data-view');
                this.toggleAssetView(view);
            });
        });
    }

    initializeAssetActions() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.preview-btn')) {
                const assetCard = e.target.closest('.asset-card');
                const assetId = this.getAssetIdFromCard(assetCard);
                this.previewAsset(assetId);
            } else if (e.target.closest('.insert-btn')) {
                const assetCard = e.target.closest('.asset-card');
                const assetId = this.getAssetIdFromCard(assetCard);
                this.insertAsset(assetId);
            } else if (e.target.closest('.download-btn')) {
                const assetCard = e.target.closest('.asset-card');
                const assetId = this.getAssetIdFromCard(assetCard);
                this.downloadAsset(assetId);
            }
        });
    }

    renderAssets() {
        const assetsGrid = document.getElementById('assets-grid');
        if (!assetsGrid) return;

        assetsGrid.innerHTML = this.assetData.map(asset => this.renderAssetCard(asset)).join('');
        this.initializeAssetDragAndDrop();
    }

    renderAssetCard(asset) {
        let previewContent = '';
        
        switch (asset.preview) {
            case 'text':
                previewContent = `
                    <div class="text-preview">
                        <i class="fas fa-font"></i>
                        <p>"${asset.content}"</p>
                    </div>
                `;
                break;
            case 'image':
                previewContent = `<img src="${asset.url}" alt="${asset.title}">`;
                break;
            case 'video':
                previewContent = `
                    <div class="video-preview">
                        <i class="fas fa-play-circle"></i>
                        <img src="${asset.url}" alt="${asset.title}">
                    </div>
                `;
                break;
            case 'file':
                previewContent = `
                    <div class="file-preview">
                        <i class="fas fa-file-pdf"></i>
                        <span>${asset.fileType}</span>
                    </div>
                `;
                break;
        }

        return `
            <div class="asset-card ${asset.type}-asset" draggable="true" data-type="${asset.type}" data-category="${asset.category}" data-id="${asset.id}">
                <div class="asset-preview">
                    ${previewContent}
                </div>
                <div class="asset-info">
                    <div class="asset-title">${asset.title}</div>
                    <div class="asset-meta">
                        <span class="asset-type">${this.formatAssetType(asset.type)}</span>
                        <span class="asset-usage">Used ${asset.usage} times</span>
                    </div>
                    <div class="asset-tags">
                        ${asset.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="asset-actions">
                    <button class="asset-btn preview-btn" title="Preview">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="asset-btn insert-btn" title="Insert">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="asset-btn download-btn" title="Download">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
        `;
    }

    formatAssetType(type) {
        const typeMap = {
            'text': 'Text Block',
            'images': 'Image',
            'videos': 'Video',
            'files': 'File'
        };
        return typeMap[type] || type;
    }

    getAssetIdFromCard(card) {
        return parseInt(card.getAttribute('data-id'));
    }

    filterAssets(filters) {
        let filteredAssets = [...this.assetData];
        
        // Apply search filter
        if (filters.search && filters.search.trim()) {
            const searchTerm = filters.search.toLowerCase();
            filteredAssets = filteredAssets.filter(asset => 
                asset.title.toLowerCase().includes(searchTerm) ||
                asset.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                asset.type.toLowerCase().includes(searchTerm)
            );
        }
        
        // Apply type filter
        if (filters.type && filters.type !== 'all') {
            filteredAssets = filteredAssets.filter(asset => 
                asset.type.toLowerCase() === filters.type.toLowerCase()
            );
        }
        
        // Apply category filter
        if (filters.category && filters.category !== 'all') {
            filteredAssets = filteredAssets.filter(asset => 
                asset.category.toLowerCase() === filters.category.toLowerCase()
            );
        }
        
        this.renderFilteredAssets(filteredAssets);
    }

    renderFilteredAssets(filteredAssets) {
        const assetsGrid = document.getElementById('assets-grid');
        if (!assetsGrid) return;

        if (filteredAssets.length === 0) {
            assetsGrid.innerHTML = `
                <div class="no-assets-message">
                    <i class="fas fa-search"></i>
                    <h3>No assets found</h3>
                    <p>Try adjusting your search criteria or upload new assets</p>
                </div>
            `;
            return;
        }

        assetsGrid.innerHTML = filteredAssets.map(asset => this.renderAssetCard(asset)).join('');
        this.initializeAssetDragAndDrop();
    }

    toggleAssetView(view) {
        const assetsGrid = document.getElementById('assets-grid');
        if (assetsGrid) {
            assetsGrid.className = view === 'list' ? 'assets-list' : 'assets-grid';
        }
    }

    previewAsset(assetId) {
        const asset = this.assetData.find(a => a.id === assetId);
        if (asset) {
            this.showNotification(`Previewing ${asset.title}`, 'info');
        }
    }

    insertAsset(assetId) {
        const asset = this.assetData.find(a => a.id === assetId);
        if (asset) {
            this.insertAssetIntoEditor(asset);
            this.showNotification(`${asset.title} inserted into content`, 'success');
        }
    }

    insertAssetIntoEditor(asset) {
        const editor = document.getElementById('main-editor');
        if (!editor) return;

        let content = '';
        switch (asset.type) {
            case 'text':
                content = asset.content;
                break;
            case 'images':
                content = `<img src="${asset.url}" alt="${asset.title}" style="max-width: 100%; height: auto;" data-asset-id="${asset.id}">`;
                break;
            case 'videos':
                content = `<div class="video-embed" data-asset-id="${asset.id}"><iframe src="${asset.url}" frameborder="0" allowfullscreen></iframe></div>`;
                break;
            case 'files':
                content = `<a href="#" class="file-link" data-asset-id="${asset.id}">${asset.title}</a>`;
                break;
        }

        document.execCommand('insertHTML', false, content);
        
        // Track asset usage in current content
        if (this.currentContent) {
            if (!this.currentContent.assets) {
                this.currentContent.assets = [];
            }
            
            // Add asset if not already tracked
            if (!this.currentContent.assets.find(a => a.id === asset.id)) {
                this.currentContent.assets.push({
                    id: asset.id,
                    title: asset.title,
                    type: asset.type,
                    insertedAt: new Date()
                });
            }
            
            // Update asset usage count
            const assetIndex = this.assetData.findIndex(a => a.id === asset.id);
            if (assetIndex !== -1) {
                this.assetData[assetIndex].usage++;
            }
            
            // Trigger content update
            this.updateContentFromEditor();
        }
    }

    downloadAsset(assetId) {
        const asset = this.assetData.find(a => a.id === assetId);
        if (asset) {
            this.showNotification(`Downloading ${asset.title}...`, 'info');
            setTimeout(() => {
                this.showNotification(`${asset.title} downloaded`, 'success');
            }, 1000);
        }
    }

    // Drag and Drop functionality
    initializeDragAndDrop() {
        this.initializeAssetDragAndDrop();
        this.initializeEditorDropZone();
    }

    initializeAssetDragAndDrop() {
        const assetCards = document.querySelectorAll('.asset-card[draggable="true"]');
        assetCards.forEach(card => {
            card.addEventListener('dragstart', this.handleAssetDragStart.bind(this));
            card.addEventListener('dragend', this.handleAssetDragEnd.bind(this));
        });
    }

    initializeEditorDropZone() {
        const editor = document.getElementById('main-editor');
        if (editor) {
            editor.addEventListener('dragover', this.handleEditorDragOver.bind(this));
            editor.addEventListener('drop', this.handleEditorDrop.bind(this));
        }
    }

    handleAssetDragStart(e) {
        const assetId = parseInt(e.currentTarget.getAttribute('data-id'));
        this.draggedAsset = this.assetData.find(a => a.id === assetId);
        e.currentTarget.classList.add('dragging');
        this.showDropOverlay();
    }

    handleAssetDragEnd(e) {
        e.currentTarget.classList.remove('dragging');
        this.draggedAsset = null;
        this.hideDropOverlay();
    }

    handleEditorDragOver(e) {
        e.preventDefault();
    }

    handleEditorDrop(e) {
        e.preventDefault();
        if (this.draggedAsset) {
            this.insertAssetIntoEditor(this.draggedAsset);
            this.showNotification(`${this.draggedAsset.title} added to content`, 'success');
        }
        this.hideDropOverlay();
    }

    showDropOverlay() {
        const overlay = document.getElementById('drop-overlay');
        if (overlay) {
            overlay.classList.add('active');
        }
    }

    hideDropOverlay() {
        const overlay = document.getElementById('drop-overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    }

    // Workflow functionality
    initializeWorkflows() {
        // Template buttons
        const templateBtns = document.querySelectorAll('.use-template-btn');
        templateBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.useWorkflowTemplate(btn);
            });
        });

        // Create workflow button
        const createWorkflowBtn = document.querySelector('.create-workflow-btn');
        if (createWorkflowBtn) {
            createWorkflowBtn.addEventListener('click', () => {
                this.showWorkflowModal();
            });
        }
    }

    initializeWorkflowsSpecific() {
        // Initialize workflow-specific functionality
    }

    useWorkflowTemplate(btn) {
        const templateCard = btn.closest('.template-card');
        const templateType = templateCard.querySelector('h4').textContent;
        this.showNotification(`Using ${templateType} template`, 'info');
        this.showWorkflowModal();
    }

    // Modal functionality
    initializeModals() {
        // Modal close buttons
        const modalCloses = document.querySelectorAll('.modal-close');
        modalCloses.forEach(close => {
            close.addEventListener('click', () => {
                this.closeModal(close.closest('.modal'));
            });
        });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target);
            }
        });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });

        // Initialize specific modals
        this.initializeWorkflowModal();
        this.initializeAISuggestionsModal();
        this.initializeApprovalModal();
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
        }
    }

    closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
        }
    }

    closeAllModals() {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => this.closeModal(modal));
    }

    initializeWorkflowModal() {
        // Add reviewer button
        const addReviewerBtn = document.querySelector('.add-reviewer-btn');
        if (addReviewerBtn) {
            addReviewerBtn.addEventListener('click', () => {
                this.addReviewerRow();
            });
        }

        // Remove reviewer buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.remove-reviewer-btn')) {
                const reviewerItem = e.target.closest('.reviewer-item');
                reviewerItem.remove();
                this.updateWorkflowPreview();
            }
        });

        // Workflow type change
        const workflowTypeInputs = document.querySelectorAll('input[name="workflow-type"]');
        workflowTypeInputs.forEach(input => {
            input.addEventListener('change', () => {
                this.updateWorkflowPreview();
            });
        });

        // Start workflow button
        const startWorkflowBtn = document.querySelector('.start-workflow-btn');
        if (startWorkflowBtn) {
            startWorkflowBtn.addEventListener('click', () => {
                this.startWorkflow();
            });
        }
    }

    showWorkflowModal() {
        this.showModal('workflow-modal');
    }

    addReviewerRow() {
        const reviewersList = document.querySelector('.reviewers-list');
        if (reviewersList) {
            const newRow = document.createElement('div');
            newRow.className = 'reviewer-item';
            newRow.innerHTML = `
                <select class="reviewer-select">
                    <option value="">Select reviewer...</option>
                    <option value="sarah-miller">Sarah Miller (Social Media Manager)</option>
                    <option value="legal-team">Legal Team</option>
                    <option value="mike-kumar">Mike Kumar (Marketing Director)</option>
                    <option value="operations-team">Operations Team</option>
                    <option value="product-team">Product Team</option>
                    <option value="technical-team">Technical Team</option>
                    <option value="ux-team">User Experience Team</option>
                    <option value="customer-service">Customer Service Team</option>
                </select>
                <select class="role-select">
                    <option value="">Select role...</option>
                    <option value="legal">Legal Review</option>
                    <option value="brand">Brand Review</option>
                    <option value="seo">SEO Review</option>
                    <option value="content">Content Review</option>
                    <option value="marketing">Marketing Review</option>
                    <option value="technical">Technical Review</option>
                </select>
                <input type="date" class="deadline-input" placeholder="Deadline">
                <button class="remove-reviewer-btn">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            reviewersList.appendChild(newRow);
        }
    }

    updateWorkflowPreview() {
        // Update the workflow preview based on current settings
        console.log('Updating workflow preview');
    }

    startWorkflow() {
        this.showNotification('Workflow started successfully', 'success');
        this.closeModal(document.getElementById('workflow-modal'));
    }

    initializeAISuggestionsModal() {
        // Suggestion tabs
        const suggestionTabs = document.querySelectorAll('.suggestions-tabs .tab-btn');
        suggestionTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                suggestionTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.loadSuggestionTab(tab.getAttribute('data-tab'));
            });
        });

        // Suggestion actions
        const acceptBtn = document.querySelector('.ai-suggestions-modal .accept-btn');
        const rejectBtn = document.querySelector('.ai-suggestions-modal .reject-btn');
        const applyAllBtn = document.querySelector('.apply-all-btn');

        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                this.showNotification('Suggestion accepted', 'success');
            });
        }
        if (rejectBtn) {
            rejectBtn.addEventListener('click', () => {
                this.showNotification('Suggestion rejected', 'info');
            });
        }
        if (applyAllBtn) {
            applyAllBtn.addEventListener('click', () => {
                this.showNotification('All suggestions applied', 'success');
                this.closeModal(document.getElementById('ai-suggestions-modal'));
            });
        }
    }

    showAISuggestionsModal() {
        this.showModal('ai-suggestions-modal');
    }

    loadSuggestionTab(tab) {
        console.log('Loading suggestion tab:', tab);
    }

    initializeApprovalModal() {
        const approveBtn = document.querySelector('.approval-modal .approve-btn');
        const rejectBtn = document.querySelector('.approval-modal .reject-btn');
        const requestChangesBtn = document.querySelector('.request-changes-btn');

        if (approveBtn) {
            approveBtn.addEventListener('click', () => {
                this.approveContent();
            });
        }
        if (rejectBtn) {
            rejectBtn.addEventListener('click', () => {
                this.rejectContent();
            });
        }
        if (requestChangesBtn) {
            requestChangesBtn.addEventListener('click', () => {
                this.requestChanges();
            });
        }
    }

    showApprovalModal() {
        this.showModal('approval-modal');
    }

    approveContent() {
        this.showNotification('Content approved', 'success');
        this.closeModal(document.getElementById('approval-modal'));
    }

    rejectContent() {
        this.showNotification('Content rejected', 'warning');
        this.closeModal(document.getElementById('approval-modal'));
    }

    requestChanges() {
        this.showNotification('Changes requested', 'info');
        this.closeModal(document.getElementById('approval-modal'));
    }

    showContentViewModal(content) {
        // Create enhanced content view modal
        this.createEnhancedContentViewModal(content);
    }

    createEnhancedContentViewModal(content) {
        // Remove existing modal if present
        const existingModal = document.getElementById('enhanced-content-view-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.id = 'enhanced-content-view-modal';
        modal.innerHTML = `
            <div class="modal-content large enhanced-content-modal">
                <div class="modal-header">
                    <div class="content-header-info">
                        <h2>${content.title}</h2>
                        <div class="content-metadata">
                            <span class="status-badge status-${content.status}">${this.formatStatus(content.status)}</span>
                            <span class="version-info">v${content.metadata?.version || 1}</span>
                            <span class="author-info">by ${content.metadata?.author || 'Unknown'}</span>
                        </div>
                    </div>
                    <div class="content-actions">
                        ${content.status === 'published' ? `
                            <button class="btn btn-outline view-published-btn">
                                <i class="fas fa-external-link-alt"></i>
                                View Published
                            </button>
                        ` : ''}
                        <button class="btn btn-outline print-content-btn">
                            <i class="fas fa-print"></i>
                            Print
                        </button>
                        <button class="btn btn-outline export-content-btn">
                            <i class="fas fa-download"></i>
                            Export
                        </button>
                        <button class="modal-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="modal-body enhanced-content-body">
                    <div class="content-main">
                        <div class="content-tabs">
                            <button class="content-tab-btn active" data-tab="content">Content</button>
                            <button class="content-tab-btn" data-tab="metadata">Details</button>
                            <button class="content-tab-btn" data-tab="versions">Version History</button>
                            <button class="content-tab-btn" data-tab="analytics">Analytics</button>
                        </div>
                        
                        <div class="content-tab-content">
                            <!-- Content Tab -->
                            <div class="tab-panel active" data-panel="content">
                                <div class="content-preview">
                                    ${content.content || `<h1>${content.title}</h1><p>Content preview would be displayed here.</p>`}
                                </div>
                            </div>
                            
                            <!-- Metadata Tab -->
                            <div class="tab-panel" data-panel="metadata">
                                <div class="metadata-grid">
                                    <div class="metadata-section">
                                        <h4>Content Information</h4>
                                        <div class="metadata-item">
                                            <label>Title:</label>
                                            <span>${content.title}</span>
                                        </div>
                                        <div class="metadata-item">
                                            <label>Status:</label>
                                            <span class="status-badge status-${content.status}">${this.formatStatus(content.status)}</span>
                                        </div>
                                        <div class="metadata-item">
                                            <label>Author:</label>
                                            <span>${content.metadata?.author || 'Unknown'}</span>
                                        </div>
                                        <div class="metadata-item">
                                            <label>Created:</label>
                                            <span>${content.metadata?.createdAt ? this.formatDate(content.metadata.createdAt) : 'Unknown'}</span>
                                        </div>
                                        <div class="metadata-item">
                                            <label>Last Modified:</label>
                                            <span>${content.metadata?.lastModified ? this.formatDate(content.metadata.lastModified) : 'Unknown'}</span>
                                        </div>
                                        <div class="metadata-item">
                                            <label>Word Count:</label>
                                            <span>${content.metadata?.wordCount || 0} words</span>
                                        </div>
                                        <div class="metadata-item">
                                            <label>Reading Time:</label>
                                            <span>${content.metadata?.readingTime || 0} min</span>
                                        </div>
                                    </div>
                                    
                                    <div class="metadata-section">
                                        <h4>Workflow Information</h4>
                                        <div class="metadata-item">
                                            <label>Workflow Type:</label>
                                            <span>${content.workflow}</span>
                                        </div>
                                        <div class="metadata-item">
                                            <label>Assigned Reviewers:</label>
                                            <div class="reviewer-tags">
                                                ${content.reviewers?.map(r => `<span class="reviewer-tag" title="${this.getReviewerFullName(r)}">${r}</span>`).join('') || 'None'}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    ${content.status === 'published' ? `
                                        <div class="metadata-section">
                                            <h4>Publication Information</h4>
                                            <div class="metadata-item">
                                                <label>Published:</label>
                                                <span>${content.metadata?.publishedAt ? this.formatDate(content.metadata.publishedAt) : 'Not published'}</span>
                                            </div>
                                            <div class="metadata-item">
                                                <label>Public URL:</label>
                                                <span>${content.publishedUrl || 'Not available'}</span>
                                            </div>
                                            <div class="metadata-item">
                                                <label>Social Shares:</label>
                                                <div class="social-shares">
                                                    <span><i class="fab fa-facebook"></i> ${content.socialShares?.facebook || 0}</span>
                                                    <span><i class="fab fa-twitter"></i> ${content.socialShares?.twitter || 0}</span>
                                                    <span><i class="fab fa-linkedin"></i> ${content.socialShares?.linkedin || 0}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                            
                            <!-- Version History Tab -->
                            <div class="tab-panel" data-panel="versions">
                                <div class="version-history">
                                    <div class="version-header">
                                        <h4>Version History</h4>
                                        <div class="version-actions">
                                            <button class="btn btn-sm btn-outline compare-versions-btn">
                                                <i class="fas fa-code-branch"></i>
                                                Compare Versions
                                            </button>
                                        </div>
                                    </div>
                                    <div class="version-timeline">
                                        ${this.renderVersionHistory(content.versions || [])}
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Analytics Tab -->
                            <div class="tab-panel" data-panel="analytics">
                                <div class="analytics-dashboard">
                                    <div class="analytics-metrics">
                                        <div class="metric-card">
                                            <div class="metric-icon">
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <div class="metric-content">
                                                <div class="metric-label">Rating</div>
                                                <div class="metric-value">
                                                    <div class="rating-stars">
                                                        ${this.renderStars(content.performance.rating)}
                                                    </div>
                                                    <span class="rating-value">${content.performance.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="metric-card">
                                            <div class="metric-icon">
                                                <i class="fas fa-eye"></i>
                                            </div>
                                            <div class="metric-content">
                                                <div class="metric-label">Views</div>
                                                <div class="metric-value">
                                                    <span class="metric-number">${content.views.count.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="metric-card">
                                            <div class="metric-icon">
                                                <i class="fas fa-thumbs-up"></i>
                                            </div>
                                            <div class="metric-content">
                                                <div class="metric-label">Helpful</div>
                                                <div class="metric-value">
                                                    <span class="metric-number">${content.views.helpful}%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="metric-card">
                                            <div class="metric-icon">
                                                <i class="fas fa-comments"></i>
                                            </div>
                                            <div class="metric-content">
                                                <div class="metric-label">Reviews</div>
                                                <div class="metric-value">
                                                    <span class="metric-number">${content.performance.reviews.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary close-content-btn">Close</button>
                    <button class="btn btn-primary edit-content-btn" data-content-id="${content.id}">Edit Content</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        this.initializeEnhancedContentModal(modal, content);
    }

    initializeEnhancedContentModal(modal, content) {
        // Tab switching
        const tabBtns = modal.querySelectorAll('.content-tab-btn');
        const tabPanels = modal.querySelectorAll('.tab-panel');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                
                // Update active tab
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update active panel
                tabPanels.forEach(panel => {
                    panel.classList.remove('active');
                    if (panel.getAttribute('data-panel') === targetTab) {
                        panel.classList.add('active');
                    }
                });
            });
        });

        // Close modal
        const closeBtn = modal.querySelector('.modal-close');
        const closeContentBtn = modal.querySelector('.close-content-btn');
        
        [closeBtn, closeContentBtn].forEach(btn => {
            btn.addEventListener('click', () => {
                modal.remove();
            });
        });

        // Edit content button
        const editBtn = modal.querySelector('.edit-content-btn');
        if (editBtn) {
            editBtn.addEventListener('click', () => {
                const contentId = parseInt(editBtn.getAttribute('data-content-id'));
                modal.remove();
                this.editContent(contentId);
            });
        }

        // View published button
        const viewPublishedBtn = modal.querySelector('.view-published-btn');
        if (viewPublishedBtn) {
            viewPublishedBtn.addEventListener('click', () => {
                this.viewPublishedContent(content);
            });
        }

        // Print button
        const printBtn = modal.querySelector('.print-content-btn');
        if (printBtn) {
            printBtn.addEventListener('click', () => {
                this.printContent(content);
            });
        }

        // Export button
        const exportBtn = modal.querySelector('.export-content-btn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                this.showExportOptions(content);
            });
        }

        // Compare versions button
        const compareBtn = modal.querySelector('.compare-versions-btn');
        if (compareBtn) {
            compareBtn.addEventListener('click', () => {
                this.showVersionComparison(content);
            });
        }
    }

    renderVersionHistory(versions) {
        if (!versions || versions.length === 0) {
            return '<div class="no-versions">No version history available</div>';
        }

        return versions.map(version => `
            <div class="version-item">
                <div class="version-info">
                    <div class="version-header">
                        <span class="version-number">Version ${version.version}</span>
                        <span class="version-date">${this.formatDate(version.timestamp)}</span>
                    </div>
                    <div class="version-author">by ${version.author}</div>
                    <div class="version-changes">
                        ${version.changes.map(change => `<span class="change-tag">${change}</span>`).join('')}
                    </div>
                </div>
                <div class="version-actions">
                    <button class="btn btn-sm btn-outline view-version-btn" data-version="${version.version}">
                        <i class="fas fa-eye"></i>
                        View
                    </button>
                    <button class="btn btn-sm btn-outline restore-version-btn" data-version="${version.version}">
                        <i class="fas fa-undo"></i>
                        Restore
                    </button>
                </div>
            </div>
        `).join('');
    }

    formatDate(date) {
        if (!date) return 'Unknown';
        const d = new Date(date);
        return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
    }

    viewPublishedContent(content) {
        if (content.publishedUrl) {
            window.open(content.publishedUrl, '_blank');
        } else {
            // Simulate opening published content
            this.showNotification('Opening published content...', 'info');
            setTimeout(() => {
                this.showNotification('Published content opened in new tab', 'success');
            }, 1000);
        }
    }

    printContent(content) {
        // Create a print-friendly version
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${content.title}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                    h1 { color: #0064d2; border-bottom: 2px solid #0064d2; padding-bottom: 10px; }
                    h2 { color: #333; margin-top: 30px; }
                    .metadata { background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-radius: 5px; }
                    .metadata h3 { margin-top: 0; }
                    @media print { .no-print { display: none; } }
                </style>
            </head>
            <body>
                <div class="metadata">
                    <h3>Document Information</h3>
                    <p><strong>Title:</strong> ${content.title}</p>
                    <p><strong>Author:</strong> ${content.metadata?.author || 'Unknown'}</p>
                    <p><strong>Version:</strong> ${content.metadata?.version || 1}</p>
                    <p><strong>Last Modified:</strong> ${content.metadata?.lastModified ? this.formatDate(content.metadata.lastModified) : 'Unknown'}</p>
                </div>
                ${content.content || `<h1>${content.title}</h1><p>Content not available</p>`}
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }

    showExportOptions(content) {
        // Create export options modal
        const exportModal = document.createElement('div');
        exportModal.className = 'modal active';
        exportModal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Export Content</h2>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="export-options">
                        <div class="export-option-card" data-format="html">
                            <i class="fab fa-html5"></i>
                            <h4>HTML</h4>
                            <p>Export as HTML file</p>
                        </div>
                        <div class="export-option-card" data-format="pdf">
                            <i class="fas fa-file-pdf"></i>
                            <h4>PDF</h4>
                            <p>Export as PDF document</p>
                        </div>
                        <div class="export-option-card" data-format="json">
                            <i class="fas fa-code"></i>
                            <h4>JSON</h4>
                            <p>Export as JSON data</p>
                        </div>
                        <div class="export-option-card" data-format="markdown">
                            <i class="fab fa-markdown"></i>
                            <h4>Markdown</h4>
                            <p>Export as Markdown file</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(exportModal);
        
        // Handle export option selection
        const exportOptions = exportModal.querySelectorAll('.export-option-card');
        exportOptions.forEach(option => {
            option.addEventListener('click', () => {
                const format = option.getAttribute('data-format');
                this.exportContentAs(content, format);
                exportModal.remove();
            });
        });
        
        // Close modal
        const closeBtn = exportModal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            exportModal.remove();
        });
    }

    exportContentAs(content, format) {
        this.showNotification(`Exporting content as ${format.toUpperCase()}...`, 'info');
        
        setTimeout(() => {
            // Simulate export process
            const filename = `${content.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${format}`;
            this.showNotification(`Content exported as ${filename}`, 'success');
        }, 2000);
    }

    showVersionComparison(content) {
        this.showNotification('Version comparison feature coming soon!', 'info');
    }

    // Notification system
    initializeNotifications() {
        // Close button
        const notificationClose = document.querySelector('.notification-close');
        if (notificationClose) {
            notificationClose.addEventListener('click', () => {
                this.hideNotification();
            });
        }
    }

    showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notification-text');
        const icon = notification.querySelector('.notification-content i');
        
        if (notification && notificationText && icon) {
            notificationText.textContent = message;
            
            // Update icon and color based on type
            switch (type) {
                case 'success':
                    icon.className = 'fas fa-check-circle';
                    icon.style.color = '#10b981';
                    break;
                case 'warning':
                    icon.className = 'fas fa-exclamation-triangle';
                    icon.style.color = '#f59e0b';
                    break;
                case 'error':
                    icon.className = 'fas fa-times-circle';
                    icon.style.color = '#ef4444';
                    break;
                case 'info':
                    icon.className = 'fas fa-info-circle';
                    icon.style.color = '#3b82f6';
                    break;
            }
            
            notification.classList.add('show');
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                this.hideNotification();
            }, 5000);
        }
    }

    hideNotification() {
        const notification = document.getElementById('notification');
        if (notification) {
            notification.classList.remove('show');
        }
    }

    // Keyboard shortcuts
    initializeKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + S to save
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                if (this.currentView === 'editor') {
                    this.saveDraft();
                }
            }
            
            // Ctrl/Cmd + Enter to submit for review
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                if (this.currentView === 'editor') {
                    this.submitForReview();
                }
            }
            
            // Ctrl/Cmd + N to create new content
            if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
                e.preventDefault();
                this.createNewContent();
            }
        });
    }

    createNewContent() {
        this.currentContent = {
            id: Date.now(),
            title: "New eBay Help Article",
            status: "draft",
            performance: { rating: 0, label: "New", reviews: 0 },
            views: { count: 0, helpful: 0 },
            lastEdited: "Just now",
            reviewers: [],
            workflow: "Serial",
            metadata: {
                author: "John Doe",
                createdAt: new Date(),
                lastModified: new Date(),
                publishedAt: null,
                version: 1,
                wordCount: 0,
                readingTime: 0
            },
            versions: [
                {
                    version: 1,
                    content: "",
                    author: "John Doe",
                    timestamp: new Date(),
                    changes: ["Initial creation"]
                }
            ],
            publishedUrl: null,
            socialShares: {
                facebook: 0,
                twitter: 0,
                linkedin: 0
            },
            content: '',
            assets: []
        };
        
        this.switchView('editor');
        const editor = document.getElementById('main-editor');
        if (editor) {
            editor.innerHTML = '<h1>New eBay Help Article</h1><p>Start writing your content here or use the prompt section to generate content with AI...</p>';
            
            // Add real-time content tracking
            editor.addEventListener('input', () => {
                this.updateContentFromEditor();
            });
        }
        
        // Clear the prompt input
        const promptInput = document.getElementById('prompt-input');
        if (promptInput) {
            promptInput.value = '';
        }
        
        // Show the complete workflow notification
        this.showNotification('New content created! Use the prompt section or start writing directly.', 'success');
        
        // Demonstrate the workflow by showing a guided tour
        setTimeout(() => {
            this.showWorkflowGuidedTour();
        }, 2000);
    }

    updateContentFromEditor() {
        if (!this.currentContent) return;
        
        const editor = document.getElementById('main-editor');
        if (editor) {
            this.currentContent.content = editor.innerHTML;
            
            // Extract title from content
            const titleMatch = editor.innerHTML.match(/<h1[^>]*>(.*?)<\/h1>/i);
            if (titleMatch) {
                this.currentContent.title = titleMatch[1].replace(/<[^>]*>/g, '');
            }
            
            // Update metadata
            this.currentContent.metadata.lastModified = new Date();
            this.currentContent.metadata.wordCount = this.calculateWordCount(editor.textContent);
            this.currentContent.metadata.readingTime = Math.ceil(this.currentContent.metadata.wordCount / 200);
            this.currentContent.lastEdited = "Just now";
            
            // Update version
            this.currentContent.metadata.version++;
            this.currentContent.versions.push({
                version: this.currentContent.metadata.version,
                content: this.currentContent.content,
                author: this.currentContent.metadata.author,
                timestamp: new Date(),
                changes: ["Content updated"]
            });
            
            // Update dashboard if content exists in data
            this.updateDashboardContent();
        }
    }

    calculateWordCount(text) {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    }

    updateDashboardContent() {
        if (!this.currentContent) return;
        
        const existingIndex = this.contentData.findIndex(c => c.id === this.currentContent.id);
        if (existingIndex !== -1) {
            this.contentData[existingIndex] = { ...this.currentContent };
            this.updateContentTable();
        }
    }

    showWorkflowGuidedTour() {
        // Show a series of notifications to guide through the workflow
        this.showNotification('💡 Tip: Enter a prompt in the left panel to generate content with AI', 'info');
        
        setTimeout(() => {
            this.showNotification('🤖 The AI Assistant on the right will continuously monitor your content', 'info');
        }, 3000);
        
        setTimeout(() => {
            this.showNotification('📝 When ready, click "Submit for Review" to start the approval workflow', 'info');
        }, 6000);
    }

    // Enhanced submit for review to show the complete workflow
    submitForReview() {
        if (!this.currentContent) {
            this.showNotification('Please create or edit content first', 'warning');
            return;
        }

        // Update content status
        this.currentContent.status = 'review';
        this.currentContent.reviewers = ['LT', 'SM']; // Legal Team, Social Media
        
        // Show workflow selection
        this.showWorkflowModal();
        
        // Add to content data if it's new
        const existingIndex = this.contentData.findIndex(c => c.id === this.currentContent.id);
        if (existingIndex === -1) {
            this.contentData.unshift(this.currentContent);
        } else {
            this.contentData[existingIndex] = this.currentContent;
        }
    }

    // Approver Management functionality
    showApproverManagementModal() {
        this.showModal('approver-management-modal');
        this.initializeApproverManagement();
    }

    initializeApproverManagement() {
        // Initialize approver management modal functionality
        const saveApproversBtn = document.querySelector('.save-approvers-btn');
        const cancelApproverBtn = document.querySelector('.cancel-approver-btn');
        
        if (saveApproversBtn) {
            saveApproversBtn.addEventListener('click', () => {
                this.saveApproverSettings();
            });
        }
        
        if (cancelApproverBtn) {
            cancelApproverBtn.addEventListener('click', () => {
                this.closeModal(document.getElementById('approver-management-modal'));
            });
        }

        // Initialize rule toggles
        const ruleSwitches = document.querySelectorAll('.rule-toggle input[type="checkbox"]');
        ruleSwitches.forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                const ruleItem = e.target.closest('.rule-item');
                const ruleName = ruleItem.querySelector('h4').textContent;
                this.showNotification(`${ruleName} rule ${e.target.checked ? 'enabled' : 'disabled'}`, 'info');
            });
        });

        // Initialize approver actions
        const editApproverBtns = document.querySelectorAll('.edit-approver-btn');
        const removeApproverBtns = document.querySelectorAll('.remove-approver-btn');
        
        editApproverBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const approverCard = e.target.closest('.approver-card');
                const approverName = approverCard.querySelector('h4').textContent;
                this.editApprover(approverName);
            });
        });

        removeApproverBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const approverCard = e.target.closest('.approver-card');
                const approverName = approverCard.querySelector('h4').textContent;
                this.removeApprover(approverName, approverCard);
            });
        });

        // Add new rule functionality
        const addRuleBtn = document.querySelector('.add-rule-btn');
        if (addRuleBtn) {
            addRuleBtn.addEventListener('click', () => {
                this.addNewAutoAssignmentRule();
            });
        }
    }

    saveApproverSettings() {
        this.showNotification('Approver settings saved successfully!', 'success');
        this.closeModal(document.getElementById('approver-management-modal'));
    }

    editApprover(approverName) {
        this.showNotification(`Editing settings for ${approverName}`, 'info');
        // Here you would typically open an edit modal or form
    }

    removeApprover(approverName, approverCard) {
        if (confirm(`Are you sure you want to remove ${approverName} as an approver?`)) {
            approverCard.style.opacity = '0.5';
            approverCard.style.pointerEvents = 'none';
            this.showNotification(`${approverName} removed from approvers`, 'success');
        }
    }

    addNewAutoAssignmentRule() {
        const ruleName = prompt('Enter rule name:');
        if (ruleName) {
            const keywords = prompt('Enter keywords (comma separated):');
            if (keywords) {
                this.showNotification(`New rule "${ruleName}" created with keywords: ${keywords}`, 'success');
                // Here you would add the new rule to the UI
            }
        }
    }

    // Enhanced start workflow to show the complete process
    startWorkflow() {
        if (!this.currentContent) {
            this.showNotification('No content selected for workflow', 'warning');
            return;
        }

        // Simulate the workflow process
        this.showNotification('Workflow started! Content submitted for review.', 'success');
        this.closeModal(document.getElementById('workflow-modal'));
        
        // Show the approval process simulation
        setTimeout(() => {
            this.simulateApprovalProcess();
        }, 2000);
    }

    simulateApprovalProcess() {
        // Step 1: Legal Review
        this.showNotification('📋 Legal Team is reviewing your content...', 'info');
        
        setTimeout(() => {
            this.showNotification('✅ Legal Review: Approved', 'success');
            
            // Step 2: Brand Review
            setTimeout(() => {
                this.showNotification('🎨 Brand Team is reviewing your content...', 'info');
                
                setTimeout(() => {
                    this.showNotification('✅ Brand Review: Approved', 'success');
                    
                    // Step 3: Final Publication
                    setTimeout(() => {
                        this.showNotification('🚀 Content approved! Publishing to eBay Help...', 'info');
                        
                        setTimeout(() => {
                            // Update content status to published
                            if (this.currentContent) {
                                this.currentContent.status = 'published';
                                this.currentContent.performance = { 
                                    rating: 4.5, 
                                    label: "Excellent", 
                                    reviews: 1 
                                };
                                this.currentContent.views = { 
                                    count: 1, 
                                    helpful: 100 
                                };
                            }
                            
                            this.showNotification('🎉 Content successfully published! View it in the Dashboard.', 'success');
                            
                            // Update the dashboard
                            this.updateContentTable();
                            
                            // Show option to go back to dashboard
                            setTimeout(() => {
                                if (confirm('Content published successfully! Would you like to view it in the Dashboard?')) {
                                    this.switchView('dashboard');
                                }
                            }, 2000);
                            
                        }, 2000);
                    }, 2000);
                }, 3000);
            }, 2000);
        }, 3000);
    }
    // Initialize eWatch System
    initializeEWatchSystem() {
        // Load eWatch system if available
        if (typeof EWatchSystem !== 'undefined') {
            this.eWatchSystem = new EWatchSystem(this);
            console.log('eWatch System initialized');
        } else {
            // Load eWatch system script
            const script = document.createElement('script');
            script.src = 'ewatch-system.js';
            script.onload = () => {
                if (typeof EWatchSystem !== 'undefined') {
                    this.eWatchSystem = new EWatchSystem(this);
                    console.log('eWatch System loaded and initialized');
                    this.initializeEWatchUI();
                }
            };
            document.head.appendChild(script);
        }
    }

    // Initialize eWatch UI components
    initializeEWatchUI() {
        // Initialize alert view functionality
        this.initializeAlertsView();
        
        // Update alert metrics in header
        this.updateAlertBadge();
    }

    // Initialize alerts view functionality
    initializeAlertsView() {
        // Simulate JIRA Ticket button
        const simulateJiraBtn = document.querySelector('.simulate-jira-btn');
        if (simulateJiraBtn) {
            simulateJiraBtn.addEventListener('click', () => {
                this.showJiraTicketSubmissionModal();
            });
        }

        // Create Manual Alert button
        const createManualAlertBtn = document.querySelector('.create-manual-alert-btn');
        if (createManualAlertBtn) {
            createManualAlertBtn.addEventListener('click', () => {
                this.showManualAlertModal();
            });
        }

        // Render alerts list
        this.renderAlertsList();
    }

    // Show JIRA ticket submission modal
    showJiraTicketSubmissionModal() {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.id = 'jira-submission-modal';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <h2>Submit JIRA Ticket</h2>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="jira-form">
                        <div class="form-section">
                            <h3>Ticket Information</h3>
                            <div class="form-group">
                                <label>JIRA Key</label>
                                <input type="text" id="jira-key" value="EWATCHOP-262200" readonly>
                            </div>
                            <div class="form-group">
                                <label>Summary</label>
                                <input type="text" id="jira-summary" value="Knives Policy Loophole - Butterfly knives in wrong category">
                            </div>
                            <div class="form-group">
                                <label>Priority</label>
                                <select id="jira-priority">
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High" selected>High</option>
                                    <option value="Critical">Critical</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Reporter</label>
                                <input type="email" id="jira-reporter" value="agent.reports@ebay.com">
                            </div>
                        </div>

                        <div class="form-section">
                            <h3>Problem Description</h3>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea id="jira-description" rows="4">Agents report that sellers are able to bypass keyword filters by listing "butterfly knives" under the Collectibles > Tools category instead of the Knives category.</textarea>
                            </div>
                            <div class="form-group">
                                <label>Customer/Agent Impact</label>
                                <textarea id="jira-impact" rows="3">Prohibited knives are appearing live on site. Buyers could purchase unsafe or illegal items.</textarea>
                            </div>
                            <div class="form-group">
                                <label>Frequency</label>
                                <input type="text" id="jira-frequency" value="8 confirmed cases this week">
                            </div>
                        </div>

                        <div class="form-section">
                            <h3>Environment Context</h3>
                            <div class="form-group">
                                <label>Where it occurs</label>
                                <input type="text" id="jira-location" value="Collectibles > Tools category (mis-categorization loophole)">
                            </div>
                            <div class="form-group">
                                <label>Category</label>
                                <input type="text" id="jira-category" value="Weapons / Knives">
                            </div>
                            <div class="form-group">
                                <label>Policy Link</label>
                                <input type="text" id="jira-policy" value="Knives Policy (butterfly knives prohibited)">
                            </div>
                            <div class="form-group">
                                <label>Labels (comma separated)</label>
                                <input type="text" id="jira-labels" value="policy, knives, loophole, collectibles">
                            </div>
                        </div>

                        <div class="form-section">
                            <h3>Evidence & Attachments</h3>
                            <div class="form-group">
                                <label>Evidence Files</label>
                                <div class="evidence-list">
                                    <div class="evidence-item">
                                        <i class="fas fa-image"></i>
                                        <span>screenshots_butterfly_knives.png</span>
                                        <button class="btn btn-sm btn-outline">Remove</button>
                                    </div>
                                    <div class="evidence-item">
                                        <i class="fas fa-image"></i>
                                        <span>listing_examples.png</span>
                                        <button class="btn btn-sm btn-outline">Remove</button>
                                    </div>
                                </div>
                                <button class="btn btn-outline add-evidence-btn">
                                    <i class="fas fa-plus"></i>
                                    Add Evidence
                                </button>
                            </div>
                        </div>

                        <div class="form-section">
                            <h3>Resolution Instructions</h3>
                            <div class="form-group">
                                <label>Teammate Instructions</label>
                                <textarea id="jira-teammate-instructions" rows="3">Tell the seller that butterfly knives are prohibited on eBay, even if listed outside the Knives category. The listing must be removed.</textarea>
                            </div>
                            <div class="form-group">
                                <label>Customer Instructions</label>
                                <textarea id="jira-customer-instructions" rows="3">Butterfly knives are prohibited on eBay. This applies across all categories, even if listed as a collectible or tool.</textarea>
                            </div>
                            <div class="form-group">
                                <label>Guide Update Notice</label>
                                <textarea id="jira-guide-update" rows="3">⚠️ TEMPORARY NOTICE: A system bug is allowing butterfly knives to be listed in other categories. These listings are still prohibited and should be removed immediately. Engineering is working on a fix.</textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary cancel-jira-btn">Cancel</button>
                    <button class="btn btn-primary submit-jira-btn">Submit JIRA Ticket</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.initializeJiraSubmissionModal(modal);
    }

    // Initialize JIRA submission modal
    initializeJiraSubmissionModal(modal) {
        // Close modal
        const closeBtn = modal.querySelector('.modal-close');
        const cancelBtn = modal.querySelector('.cancel-jira-btn');
        
        [closeBtn, cancelBtn].forEach(btn => {
            btn.addEventListener('click', () => {
                modal.remove();
            });
        });

        // Add evidence button
        const addEvidenceBtn = modal.querySelector('.add-evidence-btn');
        if (addEvidenceBtn) {
            addEvidenceBtn.addEventListener('click', () => {
                this.addEvidenceFile(modal);
            });
        }

        // Submit JIRA ticket
        const submitBtn = modal.querySelector('.submit-jira-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                this.submitJiraTicket(modal);
            });
        }
    }

    // Add evidence file
    addEvidenceFile(modal) {
        const fileName = prompt('Enter evidence file name:');
        if (fileName) {
            const evidenceList = modal.querySelector('.evidence-list');
            const evidenceItem = document.createElement('div');
            evidenceItem.className = 'evidence-item';
            evidenceItem.innerHTML = `
                <i class="fas fa-file"></i>
                <span>${fileName}</span>
                <button class="btn btn-sm btn-outline remove-evidence-btn">Remove</button>
            `;
            
            evidenceList.appendChild(evidenceItem);
            
            // Add remove functionality
            const removeBtn = evidenceItem.querySelector('.remove-evidence-btn');
            removeBtn.addEventListener('click', () => {
                evidenceItem.remove();
            });
        }
    }

    // Submit JIRA ticket and create alert
    submitJiraTicket(modal) {
        // Collect form data
        const jiraData = {
            key: modal.querySelector('#jira-key').value,
            summary: modal.querySelector('#jira-summary').value,
            priority: modal.querySelector('#jira-priority').value,
            reporter: modal.querySelector('#jira-reporter').value,
            description: modal.querySelector('#jira-description').value,
            impact: modal.querySelector('#jira-impact').value,
            frequency: modal.querySelector('#jira-frequency').value,
            location: modal.querySelector('#jira-location').value,
            category: modal.querySelector('#jira-category').value,
            policy: modal.querySelector('#jira-policy').value,
            labels: modal.querySelector('#jira-labels').value.split(',').map(l => l.trim()),
            teammateInstructions: modal.querySelector('#jira-teammate-instructions').value,
            customerInstructions: modal.querySelector('#jira-customer-instructions').value,
            guideUpdate: modal.querySelector('#jira-guide-update').value
        };

        // Show processing notification
        this.showNotification('Processing JIRA ticket...', 'info');

        // Simulate JIRA submission and alert creation
        setTimeout(() => {
            this.createAlertFromJira(jiraData);
            modal.remove();
            this.showNotification('🚨 JIRA ticket submitted and alert created!', 'success');
            
            // Switch to alerts view to show the new alert
            setTimeout(() => {
                this.switchView('alerts');
                this.renderAlertsList();
            }, 1000);
        }, 2000);
    }

    // Create alert from JIRA data
    createAlertFromJira(jiraData) {
        if (!this.eWatchSystem) return;

        const alertData = {
            jiraReference: jiraData.key,
            title: jiraData.summary,
            severity: jiraData.priority,
            description: jiraData.description,
            impact: jiraData.impact,
            frequency: jiraData.frequency,
            source: this.extractSourceFromReporter(jiraData.reporter),
            environment: {
                location: jiraData.location,
                category: jiraData.category,
                policyLink: jiraData.policy,
                channelImpact: ["Agent Assist", "GUIDE"],
                referenceTables: `Policy prohibits "${jiraData.category.toLowerCase()}" items`
            },
            resolution: {
                teammateInstructions: jiraData.teammateInstructions,
                customerInstructions: jiraData.customerInstructions,
                guideUpdate: jiraData.guideUpdate
            },
            governance: {
                proposedAction: "End non-compliant listings; escalate loophole fix to Product",
                escalationPath: "eWatch → Policy Manager → Product Engineering",
                governanceLevel: jiraData.priority,
                resolutionStatus: "Pending"
            },
            tags: jiraData.labels,
            affectedGuides: this.identifyAffectedGuides(jiraData),
            evidence: this.getEvidenceFromModal()
        };

        // Create the alert
        const alert = this.eWatchSystem.createManualAlert(alertData);
        
        // Update UI
        this.updateAlertBadge();
        this.updateAlertMetrics();
        
        return alert;
    }

    // Extract source from reporter email
    extractSourceFromReporter(reporter) {
        if (reporter.includes('agent')) return 'Agent reports';
        if (reporter.includes('customer')) return 'Customer reports';
        if (reporter.includes('quality')) return 'QA reports';
        return 'System reports';
    }

    // Identify affected guides based on JIRA data
    identifyAffectedGuides(jiraData) {
        const affectedGuides = [];
        
        // Check if it's related to knives policy
        if (jiraData.labels.includes('knives') || jiraData.category.toLowerCase().includes('knives')) {
            affectedGuides.push("9"); // Knives Policy Guide ID
        }
        
        // Check for other policy-related content
        if (jiraData.labels.includes('policy')) {
            affectedGuides.push("1", "3"); // General policy guides
        }
        
        return affectedGuides;
    }

    // Get evidence files from modal
    getEvidenceFromModal() {
        const evidenceItems = document.querySelectorAll('.evidence-item span');
        return Array.from(evidenceItems).map(item => item.textContent);
    }

    // Render alerts list in the alerts view
    renderAlertsList() {
        if (!this.eWatchSystem) return;

        const alertList = document.getElementById('alert-list');
        if (!alertList) return;

        const alerts = this.eWatchSystem.getAlerts();
        
        if (alerts.length === 0) {
            alertList.innerHTML = `
                <div class="no-alerts-message">
                    <i class="fas fa-shield-alt"></i>
                    <h3>No Active Alerts</h3>
                    <p>All systems are running smoothly. Create a manual alert or simulate a JIRA ticket to test the system.</p>
                </div>
            `;
            return;
        }

        alertList.innerHTML = alerts.map(alert => this.renderAlertCard(alert)).join('');
        this.initializeAlertActions();
    }

    // Render individual alert card
    renderAlertCard(alert) {
        const timeAgo = this.getTimeAgo(alert.createdAt);
        const severityIcon = this.getSeverityIcon(alert.severity);
        
        return `
            <div class="alert-card ${alert.severity.toLowerCase()}" data-alert-id="${alert.id}">
                <div class="alert-header">
                    <div class="alert-title-section">
                        <div class="alert-severity">
                            ${severityIcon}
                            <span class="severity-label">${alert.severity}</span>
                        </div>
                        <h3 class="alert-title">${alert.title}</h3>
                        <div class="alert-meta">
                            <span class="alert-id">${alert.id}</span>
                            <span class="jira-ref">${alert.jiraReference}</span>
                            <span class="alert-source">${alert.source}</span>
                            <span class="alert-time">${timeAgo}</span>
                        </div>
                    </div>
                    <div class="alert-status">
                        <span class="status-badge status-${alert.status.toLowerCase()}">${alert.status}</span>
                    </div>
                </div>
                
                <div class="alert-body">
                    <div class="alert-description">
                        <p>${alert.description}</p>
                    </div>
                    
                    <div class="alert-details">
                        <div class="alert-detail-item">
                            <strong>Impact:</strong> ${alert.impact}
                        </div>
                        <div class="alert-detail-item">
                            <strong>Frequency:</strong> ${alert.frequency}
                        </div>
                        <div class="alert-detail-item">
                            <strong>Location:</strong> ${alert.environment.location}
                        </div>
                        <div class="alert-detail-item">
                            <strong>Category:</strong> ${alert.environment.category}
                        </div>
                    </div>
                    
                    ${alert.affectedGuides && alert.affectedGuides.length > 0 ? `
                        <div class="affected-guides">
                            <strong>Affected Guides:</strong>
                            <div class="guide-tags">
                                ${alert.affectedGuides.map(guideId => {
                                    const guide = this.contentData.find(c => c.id.toString() === guideId);
                                    return guide ? `<span class="guide-tag">${guide.title}</span>` : `<span class="guide-tag">Guide ${guideId}</span>`;
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="alert-tags">
                        ${alert.tags.map(tag => `<span class="alert-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                
                <div class="alert-actions">
                    <button class="btn btn-sm btn-outline view-alert-guide-btn" data-alert-id="${alert.id}">
                        <i class="fas fa-book"></i>
                        View Alert Guide
                    </button>
                    <button class="btn btn-sm btn-outline update-guides-btn" data-alert-id="${alert.id}">
                        <i class="fas fa-sync"></i>
                        Update Guides
                    </button>
                    <button class="btn btn-sm btn-primary resolve-alert-btn" data-alert-id="${alert.id}">
                        <i class="fas fa-check"></i>
                        Resolve Alert
                    </button>
                </div>
            </div>
        `;
    }

    // Get severity icon
    getSeverityIcon(severity) {
        const icons = {
            'Critical': '<i class="fas fa-exclamation-circle"></i>',
            'High': '<i class="fas fa-exclamation-triangle"></i>',
            'Medium': '<i class="fas fa-info-circle"></i>',
            'Low': '<i class="fas fa-check-circle"></i>'
        };
        return icons[severity] || '<i class="fas fa-info-circle"></i>';
    }

    // Get time ago string
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

    // Initialize alert actions
    initializeAlertActions() {
        // View alert guide buttons
        const viewGuideButtons = document.querySelectorAll('.view-alert-guide-btn');
        viewGuideButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const alertId = e.target.closest('[data-alert-id]').getAttribute('data-alert-id');
                this.viewAlertGuide(alertId);
            });
        });

        // Update guides buttons
        const updateGuidesButtons = document.querySelectorAll('.update-guides-btn');
        updateGuidesButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const alertId = e.target.closest('[data-alert-id]').getAttribute('data-alert-id');
                this.updateAffectedGuides(alertId);
            });
        });

        // Resolve alert buttons
        const resolveButtons = document.querySelectorAll('.resolve-alert-btn');
        resolveButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const alertId = e.target.closest('[data-alert-id]').getAttribute('data-alert-id');
                this.resolveAlert(alertId);
            });
        });
    }

    // View alert guide
    viewAlertGuide(alertId) {
        if (!this.eWatchSystem) return;
        
        const alert = this.eWatchSystem.getAlert(alertId);
        if (alert && alert.alertGuide) {
            this.eWatchSystem.showAlertGuideModal(alertId);
        } else {
            this.showNotification('Alert guide not available', 'warning');
        }
    }

    // Update affected guides
    updateAffectedGuides(alertId) {
        if (!this.eWatchSystem) return;
        
        this.eWatchSystem.updateAffectedGuides(alertId);
    }

    // Resolve alert
    resolveAlert(alertId) {
        if (!this.eWatchSystem) return;
        
        const resolution = prompt('Enter resolution details:');
        if (resolution) {
            this.eWatchSystem.resolveAlert(alertId, { details: resolution });
            this.renderAlertsList();
            this.updateAlertBadge();
            this.updateAlertMetrics();
        }
    }

    // Update alert badge in header
    updateAlertBadge() {
        if (!this.eWatchSystem) return;
        
        const badge = document.getElementById('alert-count-badge');
        if (badge) {
            const activeAlerts = this.eWatchSystem.getAlerts({ status: 'Active' });
            badge.textContent = activeAlerts.length;
            badge.style.display = activeAlerts.length > 0 ? 'inline' : 'none';
        }
    }

    // Update alert metrics
    updateAlertMetrics() {
        if (!this.eWatchSystem) return;
        
        const metrics = this.eWatchSystem.getAlertMetrics();
        
        // Update metric displays
        const activeAlertsCount = document.getElementById('active-alerts-count');
        const highPriorityCount = document.getElementById('high-priority-count');
        const affectedGuidesCount = document.getElementById('affected-guides-count');
        const avgResolutionTime = document.getElementById('avg-resolution-time');
        
        if (activeAlertsCount) activeAlertsCount.textContent = metrics.active;
        if (highPriorityCount) highPriorityCount.textContent = metrics.high;
        if (affectedGuidesCount) affectedGuidesCount.textContent = metrics.affectedGuidesCount;
        if (avgResolutionTime) avgResolutionTime.textContent = metrics.avgResolutionTime + 'h';
    }

    // Show manual alert creation modal
    showManualAlertModal() {
        this.showNotification('Manual alert creation feature coming soon!', 'info');
    }

    // Initialize Communications Alert System
    initializeCommsAlertSystem() {
        // Load communications alert system if available
        if (typeof CommsAlertSystem !== 'undefined') {
            this.commsAlertSystem = new CommsAlertSystem(this);
            console.log('Communications Alert System initialized');
        } else {
            // Load communications alert system script
            const script = document.createElement('script');
            script.src = 'comms-alert-system.js';
            script.onload = () => {
                if (typeof CommsAlertSystem !== 'undefined') {
                    this.commsAlertSystem = new CommsAlertSystem(this);
                    console.log('Communications Alert System loaded and initialized');
                    this.initializeCommsAlertUI();
                }
            };
            document.head.appendChild(script);
        }
    }

    // Initialize Communications Alert UI components
    initializeCommsAlertUI() {
        // Initialize comms alerts view functionality
        this.initializeCommsAlertsView();
        
        // Update comms alert metrics in header
        this.updateCommsAlertBadge();
    }

    // Initialize comms alerts view functionality
    initializeCommsAlertsView() {
        // Render alerts list when switching to comms alerts view
        if (this.currentView === 'comms-alerts' && this.commsAlertSystem) {
            this.commsAlertSystem.renderAlerts();
            this.commsAlertSystem.updateMetrics();
        }
    }

    // Update comms alert badge in header
    updateCommsAlertBadge() {
        if (!this.commsAlertSystem) return;
        
        const badge = document.getElementById('comms-alert-badge');
        if (badge) {
            const activeAlerts = this.commsAlertSystem.alerts.filter(a => a.status === 'Active');
            badge.textContent = activeAlerts.length;
            badge.style.display = activeAlerts.length > 0 ? 'inline' : 'none';
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.airaApp = new AiraApp();
    
    // Load workflow templates system
    const script = document.createElement('script');
    script.src = 'workflow-templates.js';
    script.onload = () => {
        console.log('Workflow Templates system loaded');
    };
    document.head.appendChild(script);
});

// Global functions for backward compatibility
function switchView(viewName) {
    if (window.airaApp) {
        window.airaApp.switchView(viewName);
    }
}

function showNotification(message, type) {
    if (window.airaApp) {
        window.airaApp.showNotification(message, type);
    }
}

function showModal(modalId) {
    if (window.airaApp) {
        window.airaApp.showModal(modalId);
    }
}

function closeModal(modal) {
    if (window.airaApp) {
        window.airaApp.closeModal(modal);
    }
}
