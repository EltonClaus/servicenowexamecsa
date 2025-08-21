// Database with CSA exam questions based on the provided study content
// Total 60 questions distributed approximately by weights: LD1 7% (4 questions), LD2 11% (7), LD3 20% (12), LD4 20% (12), Other Topics 42% (25)
const questions = [
    // LD1: Platform Overview & Navigation (7%) - 4 questions
    {
        id: 1,
        question: "Who are the founder and CEO of ServiceNow?",
        options: [
            "Fred Luddy and Bill McDermott",
            "Bill Luddy and Fred Luddy",
            "Bill McDermott and Fred Luddy",
            "Bill Luddy and Bill McDermott"
        ],
        correctIndex: 0,
        explanation: "ServiceNow was founded by Fred Luddy and is currently led by CEO Bill McDermott.",
        weight: "LD1: Platform Overview & Navigation (7%)",
        category: "Platform Overview & Navigation",
        memorizationTip: "Founder: Fred Luddy, CEO: Bill McDermott"
    },
    {
        id: 2,
        question: "What are the four ServiceNow workflows?",
        options: [
            "IT Workflows, Customer Workflows, Creator Workflows, Employee Workflows",
            "Technical Workflows, Business Workflows, Developer Workflows, User Workflows",
            "Incident, Problem, Change, Request Workflows",
            "Approval, Publish, Retire, Instant Workflows"
        ],
        correctIndex: 0,
        explanation: "The four workflows are IT, Customer, Creator, and Employee Workflows.",
        weight: "LD1: Platform Overview & Navigation (7%)",
        category: "Platform Overview & Navigation",
        memorizationTip: "Workflows: IT, Customer, Creator, Employee"
    },
    {
        id: 3,
        question: "What are the four ServiceNow interfaces?",
        options: [
            "The Next Experience (Unified Navigation), Now Mobile App, Service Portal, Employee Center",
            "Classic UI, Workspace, Dashboard, Report Builder",
            "Admin Console, User Portal, Mobile App, Developer Studio",
            "Flow Designer, Virtual Agent, Integration Hub, Predictive Intelligence"
        ],
        correctIndex: 0,
        explanation: "Interfaces: Next Experience, Now Mobile, Service Portal, Employee Center.",
        weight: "LD1: Platform Overview & Navigation (7%)",
        category: "Platform Overview & Navigation",
        memorizationTip: "Interfaces: Next Experience, Mobile, Portal, Employee Center"
    },
    {
        id: 4,
        question: "What are the Incident Lifecycle states?",
        options: [
            "New, In Progress, On Hold, Resolved, Closed, Canceled",
            "Open, Assigned, Working, Fixed, Verified, Closed",
            "Draft, Review, Approve, Publish, Retire",
            "Request, Approval, Fulfillment, Closure"
        ],
        correctIndex: 0,
        explanation: "Incident states: New, In Progress, On Hold, Resolved, Closed, Canceled.",
        weight: "LD1: Platform Overview & Navigation (7%)",
        category: "Platform Overview & Navigation",
        memorizationTip: "Incident States: New > Progress > Hold > Resolved > Closed > Canceled"
    },

    // LD2: Instance Configuration (11%) - 7 questions
    {
        id: 5,
        question: "What is the difference between Configuration and Customization in ServiceNow?",
        options: [
            "Configuration uses built-in functionality without code, Customization adds new functionality through plug-ins/scripts",
            "Configuration requires code, Customization does not",
            "Configuration is for users, Customization for admins",
            "No difference, terms are interchangeable"
        ],
        correctIndex: 0,
        explanation: "Configuration: No code built-in, Customization: Add via plugins/scripts.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Config: Built-in no code, Custom: Add new"
    },
    {
        id: 6,
        question: "What are the three environment types of ServiceNow instances?",
        options: [
            "Production, Non-Production, Subproduction",
            "Dev, Test, Prod",
            "Sandbox, Staging, Live",
            "Primary, Backup, Replica"
        ],
        correctIndex: 0,
        explanation: "Types: Production, Non-Production (Dev/QA), Subproduction.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Envs: Prod, Non-Prod, Subprod"
    },
    {
        id: 7,
        question: "How do you navigate to update the Company logo?",
        options: [
            "All > System Properties > My Company",
            "All > User Administration > Companies",
            "All > System Definition > Plugins",
            "All > Self-Service > Dashboards"
        ],
        correctIndex: 0,
        explanation: "System Properties > My Company.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Logo: Sys Props > My Company"
    },
    {
        id: 8,
        question: "How do you navigate to update the Company name?",
        options: [
            "All > User Administration > Companies",
            "All > System Properties > My Company",
            "All > System Definition > Plugins",
            "All > Self-Service > Dashboards"
        ],
        correctIndex: 0,
        explanation: "User Administration > Companies.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Company Name: User Admin > Companies"
    },
    {
        id: 9,
        question: "What are the five Persona types and their privileges?",
        options: [
            "System Administrator (all access except HR/Sec), Specialized Administrator (app management), Process User (specific functions, itil/approver), Approver (view/modify approvals), Requester (submit/manage requests)",
            "Admin (full), User (basic), Developer (code), Manager (approve), Executive (view)",
            "ITIL (process), ESS (self-service), KB Admin (knowledge), Catalog Admin (catalog), Report Admin (reports)",
            "Fulfillers (tasks), Requesters (submit), Approvers (approve), Guests (view), Visitors (none)"
        ],
        correctIndex: 0,
        explanation: "Personas: Sys Admin, Spec Admin, Process User, Approver, Requester.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Personas: Sys/Spec Admin, Process, Approver, Requester"
    },
    {
        id: 10,
        question: "What is the best practice for roles in ServiceNow?",
        options: [
            "Create Group, assign role to Group, add Users to Group",
            "Assign roles directly to Users",
            "Assign to departments",
            "Use role delegation only"
        ],
        correctIndex: 0,
        explanation: "Roles to Groups, Users to Groups.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Roles: Group assign, Users add"
    },
    {
        id: 11,
        question: "What is Application Scoping in ServiceNow?",
        options: [
            "Restricts access to application’s files and data from other apps/services",
            "Scopes user access",
            "Scopes workflow execution",
            "Scopes report data"
        ],
        correctIndex: 0,
        explanation: "Scoping: Restrict app data access.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Scoping: Restrict app files/data"
    },

    // LD3: Config Apps for Collaboration (20%) - 12 questions
    {
        id: 12,
        question: "What are the three components of a Filter Condition?",
        options: [
            "Field, Operator, Value",
            "Table, Column, Data",
            "Query, Sort, Group",
            "Condition, Action, Result"
        ],
        correctIndex: 0,
        explanation: "Filter: Field, Operator, Value.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Filter: Field Operator Value"
    },
    {
        id: 13,
        question: "What are the three Classic List Context Menus?",
        options: [
            "List Control (view/filter), Column Options (reporting/config/export), Record Context (filter/assign)",
            "Form, List, View",
            "Personalize, Configure, Edit",
            "Add, Remove, Reorder"
        ],
        correctIndex: 0,
        explanation: "Menus: List Control, Column Options, Record Context.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Classic Menus: Control, Column, Record"
    },
    {
        id: 14,
        question: "How do you personalize a List in Classic View?",
        options: [
            "Click Personalize List gear icon, use List Collector to add/remove/reorder columns",
            "Right-click header > Personalize",
            "UI Builder > Personalize",
            "Form Design > Personalize"
        ],
        correctIndex: 0,
        explanation: "Personalize: Gear icon, List Collector.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Personalize List: Gear, Collector"
    },
    {
        id: 15,
        question: "How do you assign a Tag to a record?",
        options: [
            "Right-click field > Assign Tag > New Tag",
            "Add Tag column > Inline edit",
            "Form > More Options > Add Tag",
            "All of the above"
        ],
        correctIndex: 3,
        explanation: "Tags: Right-click Assign, or column edit, or Form Add.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Tags: Assign New"
    },
    {
        id: 16,
        question: "What are the three Workspace List viewing options?",
        options: [
            "Grid Mode, List Mode, Open List in New Tab",
            "Classic, Modern, Advanced",
            "Filtered, Sorted, Grouped",
            "Personal, Global, Shared"
        ],
        correctIndex: 0,
        explanation: "WS Lists: Grid, List, New Tab.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "WS Views: Grid List NewTab"
    },
    {
        id: 17,
        question: "What is the system property for inline editing in Lists?",
        options: [
            "glide.lists.inline_editing_enabled",
            "glide.ui.list_edit",
            "glide.ws.inline_edit",
            "glide.list.inline"
        ],
        correctIndex: 0,
        explanation: "Property: glide.lists.inline_editing_enabled.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Inline: glide.lists.inline_editing_enabled"
    },
    {
        id: 18,
        question: "What are the steps to configure Categories and UX Lists in UI Builder?",
        options: [
            "Configure List Category, Configure List and Add to Category, Make List Visible",
            "Create View, Add Fields, Save",
            "Edit Form, Add Sections, Publish",
            "Build Report, Add Dashboard, Share"
        ],
        correctIndex: 0,
        explanation: "UI Builder: Category, Add List, Visible.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "UI Builder: Category List Visible"
    },
    {
        id: 19,
        question: "What are the Form Design components?",
        options: [
            "Page Header, Field Navigator, Form Layout",
            "Triggers, Conditions, Actions",
            "Data, Type, Configure, Style",
            "Lists, Forms, Related, Activity"
        ],
        correctIndex: 0,
        explanation: "Form Design: Header, Navigator, Layout.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Form Design: Header Navigator Layout"
    },
    {
        id: 20,
        question: "What is a Formatter?",
        options: [
            "Form element displaying non-field information",
            "Data formatting script",
            "Report style",
            "Field policy"
        ],
        correctIndex: 0,
        explanation: "Formatter: Non-field info.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Formatter: Non-field"
    },
    {
        id: 21,
        question: "How do you customize a Choice List?",
        options: [
            "Right-click label > Configure Choices",
            "Edit table",
            "Script include",
            "UI Policy"
        ],
        correctIndex: 0,
        explanation: "Choice: Configure Choices.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Choice: Configure Choices"
    },
    {
        id: 22,
        question: "What is a Reference List?",
        options: [
            "Field selecting from referenced records",
            "Choice from predefined",
            "Dynamic script list",
            "User list"
        ],
        correctIndex: 0,
        explanation: "Reference: Referenced records.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Reference: Referenced records"
    },
    {
        id: 23,
        question: "What are the sections in Report Designer?",
        options: [
            "Data, Type, Configure, Style",
            "When, Who, What",
            "Triggers, Conditions, Actions",
            "Header, Navigator, Layout"
        ],
        correctIndex: 0,
        explanation: "Report: Data Type Configure Style.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Report Designer: Data Type Config Style"
    },

    // LD4: Self Service and Automation (20%) - 12 questions
    {
        id: 24,
        question: "What is Knowledge Management?",
        options: [
            "Centralized location for creation, categorization, viewing, governance of information",
            "Reporting tool",
            "Workflow automation",
            "User management"
        ],
        correctIndex: 0,
        explanation: "Knowledge: Centralized info.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Knowledge: Create categorize view govern"
    },
    {
        id: 25,
        question: "What role administers Knowledge Bases?",
        options: [
            "knowledge_admin",
            "admin",
            "itil",
            "kb_user"
        ],
        correctIndex: 0,
        explanation: "Role: knowledge_admin.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "KB Admin: knowledge_admin"
    },
    {
        id: 26,
        question: "What is User Criteria in Knowledge Management?",
        options: [
            "Conditions to determine create/read/write/retire access",
            "User roles",
            "Workflow conditions",
            "Report filters"
        ],
        correctIndex: 0,
        explanation: "Criteria: Access control for articles.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Criteria: Create read write retire"
    },
    {
        id: 27,
        question: "What system property ensures logged in users access KBs?",
        options: [
            "glide.knowman.block_access_with_no_user_criteria",
            "glide.kb.access",
            "glide.user.kb",
            "glide.access.kb"
        ],
        correctIndex: 0,
        explanation: "Property: glide.knowman.block_access_with_no_user_criteria.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "KB Access: glide.knowman.block_access_with_no_user_criteria"
    },
    {
        id: 28,
        question: "What are the baseline publishing/retirement workflows?",
        options: [
            "Approval Publish, Approval Retire, Instant Publish, Instant Retire, Publish Knowledge, Retire Knowledge",
            "New, Progress, Hold, Resolved, Closed, Canceled",
            "Request, Approval, Fulfillment, Closure",
            "Create, Edit, Approve, Publish, Retire, Archive"
        ],
        correctIndex: 0,
        explanation: "Workflows: Approval/Instant Publish/Retire, Publish/Retire Knowledge.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "KB Workflows: Approval Instant Publish Retire, Publish Retire"
    },
    {
        id: 29,
        question: "What is the Service Catalog?",
        options: [
            "Robust ordering system for services and products",
            "Knowledge repository",
            "Reporting dashboard",
            "User directory"
        ],
        correctIndex: 0,
        explanation: "Catalog: Ordering system.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Catalog: Order services products"
    },
    {
        id: 30,
        question: "What role manages Service Catalog?",
        options: [
            "catalog_admin",
            "admin",
            "itil",
            "sc_admin"
        ],
        correctIndex: 0,
        explanation: "Role: catalog_admin.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Catalog: catalog_admin"
    },
    {
        id: 31,
        question: "What are the 5 major components of Service Catalog?",
        options: [
            "Catalog Items, Variables, Variable Sets, Record Producers, Flows",
            "Lists, Forms, Views, Dashboards, Workspaces",
            "Triggers, Conditions, Actions, Data, Subflows",
            "Users, Groups, Roles, Permissions, Delegations"
        ],
        correctIndex: 0,
        explanation: "Components: Items, Variables, Sets, Producers, Flows.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Catalog Components: Items Variables Sets Producers Flows"
    },
    {
        id: 32,
        question: "What is a Record Producer?",
        options: [
            "Simplified form translated into Task-based records",
            "Report producer",
            "Script record creator",
            "Database producer"
        ],
        correctIndex: 0,
        explanation: "Producer: Form to Tasks.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Producer: Form Tasks"
    },
    {
        id: 33,
        question: "What is an Order Guide?",
        options: [
            "Ability to order multiple related items as single request",
            "Workflow guide",
            "Report order",
            "User ordering guide"
        ],
        correctIndex: 0,
        explanation: "Order Guide: Multi items single request.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Order Guide: Multi single request"
    },
    {
        id: 34,
        question: "What are the table prefixes and tables for Request Management?",
        options: [
            "REQ sc_request, RITM sc_req_item, SCTASK sc_task",
            "INC incident, PRB problem, CHG change",
            "KB knowledge, ART article",
            "USR sys_user, GRP sys_user_group"
        ],
        correctIndex: 0,
        explanation: "Prefixes: REQ RITM SCTASK.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Request Tables: REQ RITM SCTASK"
    },
    {
        id: 35,
        question: "What are the 3 standard Flow stages for a catalog item?",
        options: [
            "Waiting for Approval, Request Approved, Completed",
            "New, In Progress, Closed",
            "Draft, Published, Retired",
            "Create, Approve, Fulfill"
        ],
        correctIndex: 0,
        explanation: "Stages: Approval, Approved, Completed.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Flow Stages: Approval Approved Completed"
    },

    // Other Topics (42%) - 25 questions (from MD3, MD5, MD6, etc.)
    {
        id: 36,
        question: "What are the different types of Reports in ServiceNow?",
        options: [
            "Bars, Pies and Donuts, Time Series, Multi-dimensional reports, Scores, Other",
            "Lists, Forms, Dashboards, Workspaces",
            "Triggers, Actions, Flows, Subflows",
            "Notifications, Emails, SMS, Invites"
        ],
        correctIndex: 0,
        explanation: "Reports: Bars Pies Time Multi Scores Other.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Reports Types: Bars Pies Time Multi Scores Other"
    },
    {
        id: 37,
        question: "What are the Report Visibility Controls?",
        options: [
            "My Reports, Group, Global, All",
            "Personal, Shared, Public, Private",
            "Admin, User, Group, Role",
            "View, Edit, Delete, Export"
        ],
        correctIndex: 0,
        explanation: "Visibility: My Group Global All.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Report Vis: My Group Global All"
    },
    {
        id: 38,
        question: "What are the sections in Report Designer?",
        options: [
            "Data, Type, Configure, Style",
            "When, Who, What",
            "Triggers, Conditions, Actions",
            "Header, Navigator, Layout"
        ],
        correctIndex: 0,
        explanation: "Designer: Data Type Configure Style.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Report: Data Type Config Style"
    },
    {
        id: 39,
        question: "What are the Save options for a Report?",
        options: [
            "Save, Update, Insert, Insert and Stay",
            "Publish, Schedule, Export, Share",
            "Approve, Reject, Pending, Completed",
            "Create, Edit, Delete, View"
        ],
        correctIndex: 0,
        explanation: "Save: Save Update Insert InsertStay.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Report Save: Save Update Insert Stay"
    },
    {
        id: 40,
        question: "What are the Sharing menu options for a Report?",
        options: [
            "Share, Schedule, Export to PDF, Add to Dashboard, Publish",
            "Save, Update, Insert, Delete",
            "Approve, Reject, Pending, Closed",
            "Create, Edit, View, Print"
        ],
        correctIndex: 0,
        explanation: "Sharing: Share Schedule Export Add Publish.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Report Share: Share Schedule Export Add Publish"
    },
    {
        id: 41,
        question: "How do you share a Dashboard?",
        options: [
            "Click Sharing menu, specify Groups/Users/Roles for View/Edit",
            "Add to Report",
            "Publish URL",
            "Export PDF"
        ],
        correctIndex: 0,
        explanation: "Dashboard Share: Groups Users Roles View Edit.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Dashboard: Sharing View Edit"
    },
    {
        id: 42,
        question: "What is Interactive Analysis in ServiceNow?",
        options: [
            "Launch from List Column Menu to analyze data with filters",
            "Workflow tool",
            "Form designer",
            "Notification builder"
        ],
        correctIndex: 0,
        explanation: "Interactive: List analysis filters.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Interactive: Launch filters"
    },
    {
        id: 43,
        question: "What is a Form Template?",
        options: [
            "Auto-populates form fields for new records",
            "Report template",
            "Workflow template",
            "Email template"
        ],
        correctIndex: 0,
        explanation: "Template: Auto-fill forms.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Form Template: Auto-populate"
    },
    {
        id: 44,
        question: "What role grants ability to create/share Form Templates?",
        options: [
            "template_editor_group",
            "admin",
            "itil",
            "form_admin"
        ],
        correctIndex: 0,
        explanation: "Role: template_editor_group.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Template Role: template_editor_group"
    },
    {
        id: 45,
        question: "How do you manage Task-based records?",
        options: [
            "Assign to Groups, then to Individuals",
            "Direct to Users",
            "Auto-assign only",
            "No assignment"
        ],
        correctIndex: 0,
        explanation: "Tasks: Group then User assign.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Tasks: Group Individual"
    },
    {
        id: 46,
        question: "What is User Presence in ServiceNow?",
        options: [
            "Shows who is viewing/working on task and availability",
            "User login status only",
            "Presence in meetings",
            "User location"
        ],
        correctIndex: 0,
        explanation: "Presence: Viewing availability.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Presence: Viewing available"
    },
    {
        id: 47,
        question: "What are the types of Visual Task Boards?",
        options: [
            "Free-form (personal customizable), Data-driven (tied to data)",
            "Grid, List",
            "Classic, Workspace",
            "Personal, Shared"
        ],
        correctIndex: 0,
        explanation: "VTBs: Free-form, Data-driven.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "VTB: Free Data"
    },
    {
        id: 48,
        question: "What is a Notification in ServiceNow?",
        options: [
            "Alerts users via Email, SMS, Meeting Invitation",
            "Report alert",
            "Workflow notification only",
            "User message"
        ],
        correctIndex: 0,
        explanation: "Notification: Email SMS Invitation.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Notification: Email SMS Invite"
    },
    {
        id: 49,
        question: "What are the three tabs to create a Notification?",
        options: [
            "When to send, Who will receive, What it will contain",
            "Data, Type, Style",
            "Triggers, Conditions, Actions",
            "Header, Body, Footer"
        ],
        correctIndex: 0,
        explanation: "Tabs: When Who What.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Notification Tabs: When Who What"
    },
    {
        id: 50,
        question: "What is Watermark in Notifications?",
        options: [
            "Matches incoming email to records, format: prefix + ID + random string",
            "Image watermark",
            "User label",
            "Tag for records"
        ],
        correctIndex: 0,
        explanation: "Watermark: Email matching.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Watermark: Email match format"
    },
    {
        id: 51,
        question: "What is Sidebar in ServiceNow?",
        options: [
            "Real-time collaboration on task/interaction records with User Presence",
            "Navigation bar",
            "Report sidebar",
            "Form sidebar"
        ],
        correctIndex: 0,
        explanation: "Sidebar: Collaboration Presence.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Sidebar: Real-time collab"
    },
    {
        id: 52,
        question: "What is Integration Hub?",
        options: [
            "Automation with spokes",
            "User integration",
            "Report hub",
            "Workflow hub"
        ],
        correctIndex: 0,
        explanation: "Hub: Automation spokes.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Integration Hub: Spokes automation"
    },
    {
        id: 53,
        question: "What is Change Management importance?",
        options: [
            "Planned changes fitting requirements, scheduling, blackout windows, coordination",
            "Unplanned changes",
            "User changes only",
            "Report changes"
        ],
        correctIndex: 0,
        explanation: "Change: Planned scheduled.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Change: Planned blackout coord"
    },
    {
        id: 54,
        question: "What are the Upgrade Phases in ServiceNow?",
        options: [
            "Read notes plan, Prepare dev, Verify config schedule dev, Upgrade validate dev, Upgrade other non-prod, Prepare prod, Upgrade prod",
            "Install, Configure, Test, Deploy",
            "Create, Approve, Implement, Close",
            "New, Progress, Hold, Resolved"
        ],
        correctIndex: 0,
        explanation: "Upgrades: 7 phases from read to prod upgrade.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Upgrade: 7 phases read to prod"
    },
    {
        id: 55,
        question: "What is Performance Analytics vs Reporting?",
        options: [
            "PA: Historic trends forecasting, Reporting: Current state",
            "Same thing",
            "PA: Current, Reporting: Historic",
            "PA: Reports, Reporting: Dashboards"
        ],
        correctIndex: 0,
        explanation: "PA: Trends future, Report: Now.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "PA: Trends forecast, Report: Current"
    },
    {
        id: 56,
        question: "What are Instance Scan Checks types?",
        options: [
            "Table check, Column Type check, Script Only check, Linter Check",
            "User, Group, Role, Permission",
            "Trigger, Condition, Action, Data",
            "List, Form, View, Dashboard"
        ],
        correctIndex: 0,
        explanation: "Checks: Table Column Script Linter.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Scan Checks: Table Column Script Linter"
    },
    {
        id: 57,
        question: "What is a Suite in Instance Scan?",
        options: [
            "Group of individual checks and suites",
            "Single check",
            "Scan result",
            "Cleanup tool"
        ],
        correctIndex: 0,
        explanation: "Suite: Group checks.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Suite: Group checks"
    },
    {
        id: 58,
        question: "What is IT Adoption Journeys?",
        options: [
            "Central hub to discover platform capabilities and new apps",
            "User journeys",
            "Workflow journeys",
            "Report journeys"
        ],
        correctIndex: 0,
        explanation: "Journeys: Discover capabilities apps.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Adoption: Hub discover"
    },
    {
        id: 59,
        question: "What is a Family in ServiceNow releases?",
        options: [
            "Set of releases named after a major city (e.g., Tokyo)",
            "Patch set",
            "Upgrade group",
            "App family"
        ],
        correctIndex: 0,
        explanation: "Family: City named releases.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Family: City releases"
    },
    {
        id: 60,
        question: "What is the difference between Upgrading and Updating in ServiceNow?",
        options: [
            "Upgrading: To different family, Updating: Patch/hotfix within family",
            "Same thing",
            "Upgrading: Patch, Updating: Family",
            "Upgrading: App, Updating: Instance"
        ],
        correctIndex: 0,
        explanation: "Upgrade: Family, Update: Patch.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Upgrade: Family, Update: Patch"
    }
];

// Flashcard questions for memorization based on study content
const flashcards = [
    {
        question: "Founder and CEO of ServiceNow?",
        answer: "Founder: Fred Luddy, CEO: Bill McDermott."
    },
    {
        question: "Four ServiceNow workflows?",
        answer: "IT Workflows, Customer Workflows, Creator Workflows, Employee Workflows."
    },
    {
        question: "Four ServiceNow interfaces?",
        answer: "The Next Experience (Unified Navigation), Now Mobile App, Service Portal, Employee Center."
    },
    {
        question: "Incident Lifecycle states?",
        answer: "New, In Progress, On Hold, Resolved, Closed, Canceled."
    },
    {
        question: "Difference between Work Notes and Additional Comments?",
        answer: "Work notes: Viewable only within Task, Additional Comments: Viewable by requestor."
    },
    {
        question: "How to navigate to Service Operations Workspace?",
        answer: "Workspaces in top header > Service Operations Workspace."
    },
    {
        question: "Difference between Configuration and Customization?",
        answer: "Config: Built-in no code, Custom: Add via plugins/scripts."
    },
    {
        question: "Three environment types?",
        answer: "Production, Non-Production, Subproduction."
    },
    {
        question: "System property for dark theme?",
        answer: "glide.ui.polaris.dark_themes_enabled = TRUE."
    },
    {
        question: "How to install Plugins?",
        answer: "All > System Definition > Plugins."
    },
    {
        question: "Application Scoping concept?",
        answer: "Restricts access to app files/data from other apps."
    },
    {
        question: "Five Persona types?",
        answer: "System Admin, Specialized Admin, Process User, Approver, Requester."
    },
    {
        question: "Best practice for Roles?",
        answer: "Assign to Groups, add Users to Groups."
    },
    {
        question: "Three Filter Condition components?",
        answer: "Field, Operator, Value."
    },
    {
        question: "Classic List Context Menus?",
        answer: "List Control, Column Options, Record Context."
    },
    {
        question: "How to personalize List?",
        answer: "Personalize List gear, List Collector columns."
    },
    {
        question: "How to assign Tag?",
        answer: "Right-click > Assign Tag > New Tag."
    },
    {
        question: "Workspace List viewing options?",
        answer: "Grid Mode, List Mode, Open in New Tab."
    },
    {
        question: "System property for inline editing?",
        answer: "glide.lists.inline_editing_enabled."
    },
    {
        question: "Steps for Categories and UX Lists in UI Builder?",
        answer: "Configure Category, Configure List Add to Category, Make Visible."
    },
    {
        question: "Form Design components?",
        answer: "Page Header, Field Navigator, Form Layout."
    },
    {
        question: "What is a Formatter?",
        answer: "Form element for non-field info."
    },
    {
        question: "How to customize Choice List?",
        answer: "Right-click label > Configure Choices."
    },
    {
        question: "What is Reference List?",
        answer: "Select from referenced records."
    },
    {
        question: "Report types?",
        answer: "Bars, Pies Donuts, Time Series, Multi-dimensional, Scores, Other."
    },
    {
        question: "Report Visibility Controls?",
        answer: "My Reports, Group, Global, All."
    },
    {
        question: "Report Designer sections?",
        answer: "Data, Type, Configure, Style."
    },
    {
        question: "Report Save options?",
        answer: "Save, Update, Insert, Insert and Stay."
    },
    {
        question: "Report Sharing menu options?",
        answer: "Share, Schedule, Export PDF, Add Dashboard, Publish."
    },
    {
        question: "How to share Dashboard?",
        answer: "Sharing menu > Groups/Users/Roles Can View/Edit."
    },
    {
        question: "What is Interactive Analysis?",
        answer: "Launch from List for data analysis with filters."
    },
    {
        question: "What is Form Template?",
        answer: "Auto-populates fields for new records."
    },
    {
        question: "Role for Form Templates?",
        answer: "template_editor_group."
    },
    {
        question: "How to manage Tasks?",
        answer: "Assign to Groups then Individuals."
    },
    {
        question: "What is User Presence?",
        answer: "Shows viewing/working on task and availability."
    },
    {
        question: "Types of Visual Task Boards?",
        answer: "Free-form (custom), Data-driven (data tied)."
    },
    {
        question: "How to use Quick Messages?",
        answer: "All > Email Client > Quick Messages, insert in Email Client."
    },
    {
        question: "What is a Notification?",
        answer: "Alerts via Email, SMS, Meeting Invitation."
    },
    {
        question: "Notification tabs?",
        answer: "When to send, Who receives, What contains."
    },
    {
        question: "What is Watermark?",
        answer: "Matches email to records, format prefix ID random."
    },
    {
        question: "What is Sidebar?",
        answer: "Real-time collaboration with Presence, messages to Activity."
    },
    {
        question: "What is Integration Hub?",
        answer: "Automation with spokes."
    },
    {
        question: "What is Predictive Intelligence?",
        answer: "Improves efficiency quality with ML."
    },
    {
        question: "What is Instance Scan?",
        answer: "Checks for anomalies/opportunities."
    },
    {
        question: "Instance Scan Check types?",
        answer: "Table, Column Type, Script Only, Linter."
    },
    {
        question: "What is a Suite in Instance Scan?",
        answer: "Group of checks/suites."
    },
    {
        question: "What is Results and Findings in Instance Scan?",
        answer: "Result: Scan output, Finding: Violation record."
    },
    {
        question: "What is Table Cleanup in Instance Scan?",
        answer: "Erases previous scan results."
    },
    {
        question: "What is IT Adoption Journeys?",
        answer: "Hub to discover capabilities and apps."
    },
    {
        question: "What is a Family in releases?",
        answer: "Set of releases named after city (e.g., Tokyo)."
    },
    {
        question: "Difference between Upgrading and Updating?",
        answer: "Upgrading: Different family, Updating: Patch/hotfix same family."
    },
    {
        question: "Upgrade Phases?",
        answer: "1 Read plan, 2 Prepare dev, 3 Verify schedule dev, 4 Upgrade validate dev, 5 Upgrade non-prod, 6 Prepare prod, 7 Upgrade prod."
    },
    {
        question: "Rollback window for upgrades?",
        answer: "10 days, contact Support."
    },
    {
        question: "What is Performance Analytics?",
        answer: "Historic trends forecasting (vs Reporting current state)."
    },
    {
        question: "What is Automation Center?",
        answer: "Benefits like RPA integration."
    }
];

// User state
let userState = {
    currentQuestion: 0,
    score: 0,
    xp: 0,
    level: 1,
    streak: 0,
    selectedOption: null,
    answers: [],
    hearts: 5,
    maxHearts: 5,
    wrongAnswers: [],
    categoryProgress: {
        "Platform Overview": { answered: 0, correct: 0 },
        "Instance Configuration": { answered: 0, correct: 0 },
        "Config Apps for Collaboration": { answered: 0, correct: 0 },
        "Self Service and Automation": { answered: 0, correct: 0 },
        "Other Topics": { answered: 0, correct: 0 }
    },
    dailyGoal: Infinity,
    dailyCompleted: 0,
    lastStudyDate: null,
    markedQuestions: [],
    currentFlashcard: 0
};

// DOM elements
const questionElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackMessage = document.getElementById('feedback-message');
const explanationElement = document.getElementById('explanation');
const xpEarnedElement = document.getElementById('xp-earned');
const currentQuestionElement = document.getElementById('current');
const totalQuestionsElement = document.getElementById('total');
const progressBar = document.getElementById('progress-bar');
const questionWeight = document.getElementById('question-weight');
const xpElement = document.getElementById('xp');
const levelElement = document.getElementById('level');
const streakElement = document.getElementById('streak');
const progressPlatform = document.getElementById('progress-platform');
const progressDatabase = document.getElementById('progress-database');
const progressAutomation = document.getElementById('progress-automation');
const progressConfig = document.getElementById('progress-config');
const progressIntegration = document.getElementById('progress-integration');
const dailyProgressBar = document.getElementById('daily-progress-bar');
const dailyCompletedElement = document.getElementById('daily-completed');
const dailyTargetElement = document.getElementById('daily-target');
const memorizationTipElement = document.getElementById('memorization-tip');
const markButton = document.getElementById('mark-btn');
const flashcardElement = document.getElementById('flashcard');
const flashcardQuestion = document.getElementById('flashcard-question');
const flashcardAnswer = document.getElementById('flashcard-answer');
const prevFlashcardButton = document.getElementById('prev-flashcard');
const flipFlashcardButton = document.getElementById('flip-flashcard');
const nextFlashcardButton = document.getElementById('next-flashcard');
const tabElements = document.querySelectorAll('.nav-tab');
const tabContentElements = document.querySelectorAll('.tab-content');
const heartsContainer = document.getElementById('hearts');
const noHeartsMessage = document.getElementById('no-hearts-message');
const quizContainer = document.getElementById('quiz-container');
const reviewList = document.getElementById('review-list');
const reviewWrongButton = document.getElementById('review-wrong-answers');

// Initialize the application
function initApp() {
    totalQuestionsElement.textContent = questions.length;
    dailyTargetElement.textContent = "∞"; // Infinite questions allowed
    
    // Load user progress from localStorage if available
    const savedProgress = localStorage.getItem('servicenowCSAProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        userState.xp = progress.xp || 0;
        userState.level = progress.level || 1;
        userState.streak = progress.streak || 0;
        userState.hearts = progress.hearts !== undefined ? progress.hearts : 5;
        userState.wrongAnswers = progress.wrongAnswers || [];
        userState.categoryProgress = progress.categoryProgress || userState.categoryProgress;
        userState.dailyCompleted = progress.dailyCompleted || 0;
        userState.lastStudyDate = progress.lastStudyDate || null;
        userState.markedQuestions = progress.markedQuestions || [];
        
        updateStats();
        updateCategoryProgress();
        updateDailyProgress();
        updateHearts();
        updateReviewList();
        
        // Check if user has no hearts
        if (userState.hearts <= 0) {
            showNoHeartsMessage();
        }
    }
    
    loadQuestion();
    loadFlashcard();
    
    // Set up tab navigation
    tabElements.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            // Update active tab
            tabElements.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding content
            tabContentElements.forEach(content => content.classList.remove('active'));
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Set up flashcard navigation
    prevFlashcardButton.addEventListener('click', showPrevFlashcard);
    nextFlashcardButton.addEventListener('click', showNextFlashcard);
    flipFlashcardButton.addEventListener('click', flipFlashcard);
    flashcardElement.addEventListener('click', flipFlashcard);
    
    // Set up mark button
    markButton.addEventListener('click', toggleMarkQuestion);
    
    // Set up review wrong answers button
    reviewWrongButton.addEventListener('click', () => {
        // Switch to review tab
        tabElements.forEach(t => t.classList.remove('active'));
        document.querySelector('[data-tab="review"]').classList.add('active');
        tabContentElements.forEach(content => content.classList.remove('active'));
        document.getElementById('review-tab').classList.add('active');
    });
}

// Load current question
function loadQuestion() {
    const current = questions[userState.currentQuestion];
    questionElement.textContent = current.question;
    currentQuestionElement.textContent = userState.currentQuestion + 1;
    questionWeight.textContent = current.weight;
    
    // Update progress bar
    progressBar.style.width = `${((userState.currentQuestion) / questions.length) * 100}%`;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add new options
    current.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => {
            // Deselect previously selected option
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Select new option
            optionElement.classList.add('selected');
            userState.selectedOption = index;
            submitButton.disabled = false;
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Update mark button state
    updateMarkButton();
    
    // Reset UI state
    submitButton.disabled = true;
    feedbackContainer.style.display = 'none';
}

// Submit answer
function submitAnswer() {
    const current = questions[userState.currentQuestion];
    const isCorrect = userState.selectedOption === current.correctIndex;
    
    // Update category progress
    userState.categoryProgress[current.category].answered++;
    if (isCorrect) {
        userState.categoryProgress[current.category].correct++;
    } else {
        // Add to wrong answers if not already there
        if (!userState.wrongAnswers.some(q => q.id === current.id)) {
            userState.wrongAnswers.push(current);
            updateReviewList();
        }
        
        // Decrease heart
        userState.hearts--;
        updateHearts();
        
        // Check if out of hearts
        if (userState.hearts <= 0) {
            showNoHeartsMessage();
        }
    }
    
    // Update daily progress
    userState.dailyCompleted++;
    updateDailyProgress();
    
    // Check if we need to update streak
    updateStreak();
    
    // Show feedback
    feedbackContainer.style.display = 'block';
    
    if (isCorrect) {
        // Correct answer
        feedbackIcon.className = 'fas fa-check-circle feedback-icon';
        feedbackTitle.textContent = 'Correct Answer!';
        feedbackTitle.parentElement.className = 'feedback-header feedback-correct';
        feedbackMessage.textContent = 'Congratulations! You got this question right.';
        
        // Award XP based on question weight
        let xpEarned = 10;
        userState.xp += xpEarned;
        xpEarnedElement.textContent = `+${xpEarned} XP earned!`;
        
        // Increase streak
        userState.streak++;
        
        // Check for level up
        checkLevelUp();
    } else {
        // Incorrect answer
        feedbackIcon.className = 'fas fa-times-circle feedback-icon';
        feedbackTitle.textContent = 'Incorrect Answer';
        feedbackTitle.parentElement.className = 'feedback-header feedback-incorrect';
        feedbackMessage.textContent = `The correct answer is: ${current.options[current.correctIndex]}`;
        xpEarnedElement.textContent = '+0 XP earned';
    }
    
    // Show explanation and memorization tip
    explanationElement.textContent = current.explanation;
    memorizationTipElement.textContent = current.memorizationTip;
    
    // Highlight correct and incorrect answers
    document.querySelectorAll('.option').forEach(option => {
        const index = parseInt(option.dataset.index);
        if (index === current.correctIndex) {
            option.classList.add('correct');
        } else if (index === userState.selectedOption && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Disable options after submission
    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Save user progress
    updateStats();
    updateCategoryProgress();
    saveProgress();
}

// Update hearts display
function updateHearts() {
    heartsContainer.innerHTML = '';
    for (let i = 0; i < userState.maxHearts; i++) {
        const heart = document.createElement('i');
        heart.className = `fas fa-heart heart`;
        if (i >= userState.hearts) {
            heart.style.opacity = '0.3';
        }
        heartsContainer.appendChild(heart);
    }
}

// Show no hearts message
function showNoHeartsMessage() {
    noHeartsMessage.style.display = 'block';
    quizContainer.style.display = 'none';
}

// Hide no hearts message
function hideNoHeartsMessage() {
    noHeartsMessage.style.display = 'none';
    quizContainer.style.display = 'block';
}

// Update review list with wrong answers
function updateReviewList() {
    reviewList.innerHTML = '';
    
    if (userState.wrongAnswers.length === 0) {
        reviewList.innerHTML = '<p>No questions to review yet. Keep studying!</p>';
        return;
    }
    
    userState.wrongAnswers.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        reviewItem.innerHTML = `
            <div class="review-question">${index + 1}. ${question.question}</div>
            <div class="review-answer">Correct answer: ${question.options[question.correctIndex]}</div>
            <button class="btn btn-outline" data-id="${question.id}" style="margin-top: 10px;">
                <i class="fas fa-check"></i> I've Learned This
            </button>
        `;
        
        reviewList.appendChild(reviewItem);
    });
    
    // Add event listeners to "I've Learned This" buttons
    document.querySelectorAll('.review-item button').forEach(button => {
        button.addEventListener('click', function() {
            const questionId = parseInt(this.getAttribute('data-id'));
            
            // Remove from wrong answers
            userState.wrongAnswers = userState.wrongAnswers.filter(q => q.id !== questionId);
            
            // Add a heart back
            if (userState.hearts < userState.maxHearts) {
                userState.hearts++;
                updateHearts();
                
                // If we were out of hearts, hide the message
                if (userState.hearts > 0) {
                    hideNoHeartsMessage();
                }
            }
            
            // Update the list
            updateReviewList();
            
            // Save progress
            saveProgress();
        });
    });
}

// Update daily progress display
function updateDailyProgress() {
    dailyCompletedElement.textContent = userState.dailyCompleted;
}

// Update streak based on last study date
function updateStreak() {
    const today = new Date().toDateString();
    const lastStudy = userState.lastStudyDate ? new Date(userState.lastStudyDate).toDateString() : null;
    
    if (lastStudy === today) {
        // Already studied today, no change to streak
        return;
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastStudy === yesterday.toDateString()) {
        // Studied yesterday, increment streak
        userState.streak++;
    } else if (lastStudy && lastStudy !== today) {
        // Missed a day, reset streak
        userState.streak = 1;
    } else {
        // First time studying
        userState.streak = 1;
    }
    
    userState.lastStudyDate = new Date().toISOString();
    updateStats();
}

// Next question
function nextQuestion() {
    userState.currentQuestion++;
    
    if (userState.currentQuestion < questions.length) {
        loadQuestion();
    } else {
        // Quiz completed
        alert('Congratulations! You have completed all questions!');
        userState.currentQuestion = 0;
        loadQuestion();
    }
    
    // Re-enable options for next question
    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'auto';
    });
}

// Check if user leveled up
function checkLevelUp() {
    const xpNeeded = userState.level * 100;
    if (userState.xp >= xpNeeded) {
        userState.level++;
        alert(`Congratulations! You reached level ${userState.level}!`);
    }
}

// Update user stats display
function updateStats() {
    xpElement.textContent = `${userState.xp} XP`;
    levelElement.textContent = `Level ${userState.level}`;
    streakElement.textContent = `${userState.streak} days`;
}

// Update category progress display
function updateCategoryProgress() {
    progressPlatform.textContent = `${userState.categoryProgress["Platform Overview"].answered}/7`;
    progressDatabase.textContent = `${userState.categoryProgress["Instance Configuration"].answered}/11`;
    progressAutomation.textContent = `${userState.categoryProgress["Config Apps for Collaboration"].answered}/20`;
    progressConfig.textContent = `${userState.categoryProgress["Self Service and Automation"].answered}/20`;
    progressIntegration.textContent = `${userState.categoryProgress["Other Topics"].answered}/42`;
}

// Toggle mark question for review
function toggleMarkQuestion() {
    const questionId = questions[userState.currentQuestion].id;
    const index = userState.markedQuestions.indexOf(questionId);
    
    if (index === -1) {
        // Mark question
        userState.markedQuestions.push(questionId);
        markButton.innerHTML = '<i class="fas fa-bookmark"></i> Marked for Review';
        markButton.style.backgroundColor = '#ffeeba';
    } else {
        // Unmark question
        userState.markedQuestions.splice(index, 1);
        markButton.innerHTML = '<i class="far fa-bookmark"></i> Mark for Review';
        markButton.style.backgroundColor = '';
    }
    
    saveProgress();
}

// Update mark button based on current question
function updateMarkButton() {
    const questionId = questions[userState.currentQuestion].id;
    const isMarked = userState.markedQuestions.includes(questionId);
    
    if (isMarked) {
        markButton.innerHTML = '<i class="fas fa-bookmark"></i> Marked for Review';
        markButton.style.backgroundColor = '#ffeeba';
    } else {
        markButton.innerHTML = '<i class="far fa-bookmark"></i> Mark for Review';
        markButton.style.backgroundColor = '';
    }
}

// Load flashcard
function loadFlashcard() {
    const flashcard = flashcards[userState.currentFlashcard];
    flashcardQuestion.textContent = flashcard.question;
    flashcardAnswer.textContent = flashcard.answer;
    
    // Reset flip state
    flashcardElement.classList.remove('flipped');
}

// Show next flashcard
function showNextFlashcard() {
    userState.currentFlashcard = (userState.currentFlashcard + 1) % flashcards.length;
    loadFlashcard();
}

// Show previous flashcard
function showPrevFlashcard() {
    userState.currentFlashcard = (userState.currentFlashcard - 1 + flashcards.length) % flashcards.length;
    loadFlashcard();
}

// Flip flashcard
function flipFlashcard() {
    flashcardElement.classList.toggle('flipped');
}

// Save progress to localStorage
function saveProgress() {
    const progress = {
        xp: userState.xp,
        level: userState.level,
        streak: userState.streak,
        hearts: userState.hearts,
        wrongAnswers: userState.wrongAnswers,
        categoryProgress: userState.categoryProgress,
        dailyCompleted: userState.dailyCompleted,
        lastStudyDate: userState.lastStudyDate,
        markedQuestions: userState.markedQuestions
    };
    localStorage.setItem('servicenowCSAProgress', JSON.stringify(progress));
}

// Event listeners
submitButton.addEventListener('click', submitAnswer);
nextButton.addEventListener('click', nextQuestion);

// Initialize the app when page loads
window.addEventListener('load', initApp);