// Database with CSA exam questions based on the provided study content 
// Total 60 questions distributed approximately by weights: LD1 7% (4 questions), LD2 11% (7), LD3 20% (12), LD4 20% (12), Other Topics 42% (25)
const questions = [
    // LD1: Platform Overview & Navigation (7%) - Questions 8, 10, 16, 32, 61, 68, 70, 75
    {
        id: 1,
        question: "Which term refers to application menus and modules which you may want to access quickly and often?",
        options: [
            "Breadcrumb",
            "Favorite",
            "Tag",
            "Bookmark"
        ],
        correctIndex: 1,
        explanation: "Favorites allow quick access to frequently used application menus and modules.",
        weight: "LD1: Platform Overview & Navigation (7%)",
        category: "Platform Overview",
        memorizationTip: "Quick access: Favorite"
    },
    {
        id: 2,
        question: "From the User menu, which actions can a user select? (Choose three.)",
        options: [
            "Send Notifications",
            "Log Out ServiceNow",
            "Elevate Roles",
            "Impersonate Users",
            "Order from Service Catalog",
            "Approve Records"
        ],
        correctIndex: [1, 2, 3],
        explanation: "User menu actions include Log Out, Elevate Roles, and Impersonate Users.",
        weight: "LD1: Platform Overview & Navigation (7%)",
        category: "Platform Overview",
        memorizationTip: "User Menu: Log Out Elevate Impersonate"
    },
    {
        id: 3,
        question: "Which of the following would NOT appear in the History section of the Application Navigator?",
        options: [
            "Records",
            "UI Pages",
            "Lists",
            "Forms"
        ],
        correctIndex: 1,
        explanation: "UI Pages do not appear in the History section of the Application Navigator.",
        weight: "LD1: Platform Overview & Navigation (7%)",
        category: "Platform Overview",
        memorizationTip: "History: No UI Pages"
    },
    {
        id: 4,
        question: "When searching using the App Navigator search field, what can be returned? (Choose four.)",
        options: [
            "Names of Applications and Modules",
            "Names of Modules",
            "Names of Applications",
            "Favorites",
            "History Records",
            "Titles of Dashboard Gauges"
        ],
        correctIndex: [0, 1, 2, 3],
        explanation: "App Navigator search returns Applications, Modules, and Favorites.",
        weight: "LD1: Platform Overview & Navigation (7%)",
        category: "Platform Overview",
        memorizationTip: "Search: Apps Modules Favorites"
    },
    {
        id: 5,
        question: "Which section of the ServiceNow UI allows you to perform a global search?",
        options: [
            "Application Navigator",
            "Banner frame",
            "List pane",
            "Content frame"
        ],
        correctIndex: 1,
        explanation: "Global search is performed in the Banner frame.",
        weight: "LD1: Platform Overview & Navigation (7%)",
        category: "Platform Overview",
        memorizationTip: "Global Search: Banner frame"
    },
    {
        id: 6,
        question: "What are the different interfaces for accessing a ServiceNow Instance?",
        options: [
            "Now Platform User Interface, Service Portal, ServiceNow Mobile Classic, ServiceNow Agent",
            "Classic UI, Workspace, Portal, Mobile",
            "Admin, User, Developer, Executive",
            "Flow, VA, Hub, PI"
        ],
        correctIndex: 0,
        explanation: "Interfaces include Platform UI, Service Portal, Mobile Classic, and Agent.",
        weight: "LD1: Platform Overview & Navigation (7%)",
        category: "Platform Overview",
        memorizationTip: "Interfaces: Platform Portal Mobile Agent"
    },

    // LD2: Instance Configuration (11%) - Questions 14, 17, 37, 42, 53, 66, 67, 70, 110
    {
        id: 7,
        question: "What is the platform name for the User table?",
        options: [
            "u_users",
            "sys_users",
            "x_users",
            "sys_user"
        ],
        correctIndex: 3,
        explanation: "The User table is named sys_user in ServiceNow.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "User Table: sys_user"
    },
    {
        id: 8,
        question: "Which one of the following statements is a recommendation from ServiceNow about Update Sets?",
        options: [
            "Avoid using the Default Update set as an Update Set for moving customizations from instance to instance",
            "Before moving customizations from instance to instance with Update Sets, ensure that both instances are different versions",
            "Use the Baseline Update Set to store the contents of items after they are changed the first time",
            "Once an Update Set is closed as Complete, change it back to In Progress until it is applied to another instance"
        ],
        correctIndex: 0,
        explanation: "Avoid Default Update Set for moving customizations.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Update Sets: Avoid Default"
    },
    {
        id: 9,
        question: "What is the function of user impersonation?",
        options: [
            "Testing and visibility",
            "Activate verbose logging",
            "View custom perspectives",
            "Unlock Application master list"
        ],
        correctIndex: 0,
        explanation: "Impersonation is used for testing and visibility.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Impersonation: Test visibility"
    },
    {
        id: 10,
        question: "Which group of permissions is used to control Application and Module access?",
        options: [
            "Access Control Rules",
            "UI Policies",
            "Roles",
            "Assignment Rules"
        ],
        correctIndex: 2,
        explanation: "Roles control Application and Module access.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Access: Roles"
    },
    {
        id: 11,
        question: "Where can Admins check which release is running on a ServiceNow instance?",
        options: [
            "Memory Stats module",
            "Stats module",
            "System.upgraded table",
            "Transactions log"
        ],
        correctIndex: 1,
        explanation: "Check release in Stats module.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Release: Stats module"
    },
    {
        id: 12,
        question: "How is a group defined in ServiceNow?",
        options: [
            "A group is one record stored in the Group Type [sys_user_group_type] table",
            "A group is one record stored in the Group [sys_user_group] table",
            "A group defines a set of users that share the same location",
            "A group defines a set of users that share the same job title"
        ],
        correctIndex: 1,
        explanation: "Groups are defined in sys_user_group table.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Group: sys_user_group"
    },
    {
        id: 13,
        question: "What is a role in ServiceNow?",
        options: [
            "A role is one record in the Role [user_sys_role] table",
            "A role is a set of modules for a particular application",
            "A role is one record in the Role [sys_user_role] table",
            "A role is a persona used in Live Feed Chat"
        ],
        correctIndex: 2,
        explanation: "Roles are defined in sys_user_role table.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Role: sys_user_role"
    },
    {
        id: 14,
        question: "What is (are) best practice(s) regarding users/groups/roles? (Choose two.)",
        options: [
            "You should never assign roles to groups.",
            "You should assign roles to users.",
            "You should add users to groups.",
            "You should assign roles to groups."
        ],
        correctIndex: [2, 3],
        explanation: "Best practice: Add users to groups, assign roles to groups.",
        weight: "LD2: Instance Configuration (11%)",
        category: "Instance Configuration",
        memorizationTip: "Best Practice: Users to groups, roles to groups"
    },

    // LD3: Config Apps for Collaboration (20%) - Questions 5, 6, 20, 29, 63, 65, 66
    {
        id: 15,
        question: "Reports can be created from which different places in the platform? (Choose two.)",
        options: [
            "List column heading",
            "Metrics module",
            "Statistics module",
            "View / Run module"
        ],
        correctIndex: [0, 3],
        explanation: "Reports can be created from List column heading and View/Run module.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Reports: List heading, View/Run"
    },
    {
        id: 16,
        question: "Knowledge Base Search results can be sorted by which of the following? (Choose three.)",
        options: [
            "Most recent update",
            "Popularity",
            "Relevancy",
            "Manager assignment",
            "Number of views"
        ],
        correctIndex: [0, 2, 4],
        explanation: "Knowledge Base search results can be sorted by Most recent update, Relevancy, and Number of views.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "KB Sort: Update Relevancy Views"
    },
    {
        id: 17,
        question: "Which one of the following statements is true about Column Context Menus?",
        options: [
            "It displays actions such as creating quick reports, configuring the list, and exporting data",
            "It displays actions related to filtering options, assigning tags, and search",
            "It displays actions related to viewing and filtering the entire list",
            "It displays actions such as view form, view related task, and add relationship"
        ],
        correctIndex: 0,
        explanation: "Column Context Menus include actions for quick reports, list configuration, and data export.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Column Menu: Reports Config Export"
    },
    {
        id: 18,
        question: "Which tool is used to have conversations with logged-in users in real-time?",
        options: [
            "Connect Chat",
            "Now Messenger",
            "User Presence",
            "Comments"
        ],
        correctIndex: 0,
        explanation: "Connect Chat is used for real-time conversations with logged-in users.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Real-time Chat: Connect Chat"
    },
    {
        id: 19,
        question: "As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?",
        options: [
            "A metric is a report gauge used on homepages to display real-time data",
            "A metric is a time measurement used to report the effectiveness of workflows and SLAs",
            "A metric is used to measure and evaluate the effectiveness of IT service management processes",
            "A metric is a comparative measurement used to report the effectiveness of flows and SLAs"
        ],
        correctIndex: 2,
        explanation: "Metrics measure and evaluate the effectiveness of IT service management processes.",
        weight: "LD3: Config Apps for Collaboration (20%)",
        category: "Config Apps for Collaboration",
        memorizationTip: "Metric: Evaluate IT processes"
    },

    // LD4: Self Service and Automation (20%) - Questions 1, 4, 7, 9, 12, 19, 28, 43, 44, 47, 49, 51, 57, 67, 97
    {
        id: 20,
        question: "A Service Catalog may include which of the following components?",
        options: [
            "Order Guides, Exchange Rates, Calendars",
            "Order Guides, Catalog Items, and Interceptors",
            "Catalog Items, Asset Contracts, Task Surveys",
            "Record Producers, Order Guides, and Catalog Items"
        ],
        correctIndex: 3,
        explanation: "Service Catalog includes Record Producers, Order Guides, and Catalog Items.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Catalog: Record Producers, Order Guides, Items"
    },
    {
        id: 21,
        question: "The display sequence is controlled in a Service Catalog Item using which of the following?",
        options: [
            "The Default Value field in the Catalog Item form",
            "The Sequence field in the Catalog Item form",
            "The Order field in the Variable form",
            "The Choice field in the Variable form"
        ],
        correctIndex: 2,
        explanation: "Display sequence is controlled by the Order field in the Variable form.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Sequence: Order in Variable"
    },
    {
        id: 22,
        question: "What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?",
        options: [
            "RITM (Number)>REQ (Number)>PROCUREMENT (Number)",
            "REQ (Number)>RITM (Number)>PROCUREMENT (Number)",
            "REQ (Number)>RITM (Number)>TASK (Number)",
            "FULFILLMENT (Number)>RITM (Number)>TASK (Number)"
        ],
        correctIndex: 2,
        explanation: "Path to view fulfillment tasks: REQ > RITM > TASK.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Fulfillment: REQ RITM TASK"
    },
    {
        id: 23,
        question: "What is generated from the Service Catalog once a user places an order for an item or service?",
        options: [
            "A change request",
            "An Order Guide",
            "A request",
            "An SLA"
        ],
        correctIndex: 2,
        explanation: "Placing an order in the Service Catalog generates a request.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Order: Generates request"
    },
    {
        id: 24,
        question: "Which of the following is true of Service Catalog Items in relation to the Service Catalog?",
        options: [
            "They run behind the scenes.",
            "They are the building blocks.",
            "They are optional.",
            "They provide options."
        ],
        correctIndex: 1,
        explanation: "Service Catalog Items are the building blocks of the Service Catalog.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Catalog Items: Building blocks"
    },
    {
        id: 25,
        question: "For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?",
        options: [
            "Service Catalog variables can only be used in Record Producers",
            "Service Catalog variables can only be used in Order Guides",
            "Service Catalog variables cannot affect the order price",
            "Service Catalog variables are global by default"
        ],
        correctIndex: 3,
        explanation: "Service Catalog variables are global by default.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Variables: Global by default"
    },
    {
        id: 26,
        question: "Which of the following statement describes the purpose of an Order Guide?",
        options: [
            "Order Guides restrict the number of items in an order to only one item per request",
            "Order Guide provide a list of guidelines for Administrators on how to set up item variables",
            "Order Guide provide the ability to order multiple, related items as one request",
            "Order Guides take the user directly to the checkout without prompting for information"
        ],
        correctIndex: 2,
        explanation: "Order Guides allow ordering multiple related items as a single request.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Order Guide: Multi single request"
    },
    {
        id: 27,
        question: "What is a Record Producer?",
        options: [
            "A Record Producer is a type of Catalog Item that is used for Requests, not Services",
            "A Record Producer creates user records",
            "A Record Producer is a type of Catalog Item that provides easy ordering by bundling requests",
            "A Record Producer is a type of a Catalog Item that allows users to create task-based records from the Service Catalog"
        ],
        correctIndex: 3,
        explanation: "Record Producer creates task-based records from the Service Catalog.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Producer: Form Tasks"
    },
    {
        id: 28,
        question: "Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?",
        options: [
            "They direct the user to a record producer",
            "They direct the user to a catalog property",
            "They direct the user to a catalog UI policy",
            "They direct the user to a catalog client script"
        ],
        correctIndex: 0,
        explanation: "These services direct users to a record producer.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Services: Direct to Record Producer"
    },
    {
        id: 29,
        question: "What module in the Service Catalog application does an Administrator access to begin creating a new item?",
        options: [
            "Maintain Categories",
            "Maintain Items",
            "Content Items",
            "Items"
        ],
        correctIndex: 1,
        explanation: "Administrators use the Maintain Items module to create new Service Catalog items.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Create Item: Maintain Items"
    },
    {
        id: 30,
        question: "Which three Variable Types can be added to a Service Catalog Item?",
        options: [
            "True/False, Multiple Choice, and Ordered",
            "True/False, Checkbox, and Number List",
            "Number List, Single Line Text, and Reference",
            "Multiple Choice, Select Box, and Checkbox"
        ],
        correctIndex: 3,
        explanation: "Variable Types: Multiple Choice, Select Box, Checkbox.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Variables: Choice Select Checkbox"
    },
    {
        id: 31,
        question: "The baseline Service Catalog homepage contains links to which of the following components?",
        options: [
            "Record Producers, Order Guides, and Catalog Items",
            "Order Guides, Item Variables, and flows",
            "Order Guides, Catalog Items, and flows",
            "Record Producers, Order Guides, and Item Variables"
        ],
        correctIndex: 0,
        explanation: "Baseline Catalog homepage links to Record Producers, Order Guides, and Catalog Items.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Catalog Homepage: Producers Guides Items"
    },
    {
        id: 32,
        question: "Which one of the following statements describes the purpose of a Service Catalog flow?",
        options: [
            "A Service Catalog flow generates three basic components: item variable types, tasks, and approvals",
            "Although a Service Catalog flow cannot send notifications, the flow drives complex fulfillment processes",
            "A Service Catalog flow is used to drive complex fulfillment processes and sends notifications to defined users or groups",
            "A Service Catalog flow generates three basic components: item variable types, tasks, and notifications"
        ],
        correctIndex: 2,
        explanation: "Service Catalog flow drives fulfillment and sends notifications.",
        weight: "LD4: Self Service and Automation (20%)",
        category: "Self Service and Automation",
        memorizationTip: "Catalog Flow: Fulfillment Notifications"
    },

    // Other Topics (42%) - Questions 2, 11, 13, 18, 21, 23, 24, 26, 30, 31, 33, 34, 35, 36, 38, 39, 40, 42, 45, 46, 48, 50, 52, 54, 55, 56, 58, 59, 60, 62, 73, 74, 80, 81, 83, 84, 85, 86, 88, 90, 92, 94, 95, 96, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130
    {
        id: 33,
        question: "Which one of the following statements applies to a set of fields when they are coalesced during an import?",
        options: [
            "If a match is found using the coalesce fields, the existing record is updated with the information being imported",
            "If a match is not found using the coalesce fields, the system does not create a Transform Map",
            "If a match is found using the coalesce fields, the system creates a new record",
            "If a match is not found using the coalesce fields, the existing record is updated with the information being imported"
        ],
        correctIndex: 0,
        explanation: "Coalesce updates existing record if a match is found.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Coalesce: Match update existing"
    },
    {
        id: 34,
        question: "Buttons, form links, and context menu items are all examples of what type of functionality?",
        options: [
            "Business Rule",
            "UI Action",
            "Client Script",
            "UI Policy"
        ],
        correctIndex: 1,
        explanation: "UI Actions include buttons, form links, and context menu items.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "UI Actions: Buttons Links Menus"
    },
    {
        id: 35,
        question: "Table Access Control rules are processed in the following order:",
        options: [
            "any table name (wildcard), parent table name, table name",
            "table name, parent table name, any table name (wildcard)",
            "parent table name, table name, any table name (wildcard)",
            "any table name (wildcard), table name, parent table name"
        ],
        correctIndex: 1,
        explanation: "Access Control: table, parent, wildcard.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Access Control: Table Parent Wildcard"
    },
    {
        id: 36,
        question: "Which is used to initiate a flow?",
        options: [
            "A Trigger",
            "Core Action",
            "A spoke",
            "An Event"
        ],
        correctIndex: 0,
        explanation: "Flows are initiated by a Trigger.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Flow: Trigger"
    },
    {
        id: 37,
        question: "Which ServiceNow products can be used to discover and populate the CMDB? (Choose two.)",
        options: [
            "Discovery",
            "IntegrationHub ETL",
            "Finder",
            "CMDB Plug-in",
            "CMDB Integration Dashboard"
        ],
        correctIndex: [0, 1],
        explanation: "CMDB populated by Discovery and IntegrationHub ETL.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "CMDB: Discovery IntegrationHub"
    },
    {
        id: 38,
        question: "When using the Load Data and Transform Map process, what is the Mapping Assist used for?",
        options: [
            "Mapping fields using the Import Log",
            "Mapping fields using Transform History",
            "Mapping fields using an SLA",
            "Mapping fields using a Field Map"
        ],
        correctIndex: 3,
        explanation: "Mapping Assist is used for mapping fields using a Field Map.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Mapping Assist: Field Map"
    },
    {
        id: 39,
        question: "Which of the following statements describes the contents of the Configuration Management Database (CMDB)?",
        options: [
            "The CMDB contains data about tangible and intangible business assets",
            "The CMDB contains the Business Rules that direct the intangible, configurable assets used by a company",
            "The CMDB archives all Service Management PaaS equipment metadata and usage statistics",
            "The CMDB contains ITIL process data pertaining to configuration items"
        ],
        correctIndex: 0,
        explanation: "CMDB contains data about tangible and intangible business assets.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "CMDB: Tangible Intangible Assets"
    },
    {
        id: 40,
        question: "In what order should filter elements be specified?",
        options: [
            "Field, Operator, then Value",
            "Field, Operator, then Condition",
            "Operator, Condition, then Value",
            "Value, Operator, then Field"
        ],
        correctIndex: 0,
        explanation: "Filter elements: Field, Operator, Value.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Filter: Field Operator Value"
    },
    {
        id: 41,
        question: "Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)",
        options: [
            "onSubmit",
            "onUpdate",
            "onCellEdit",
            "onLoad",
            "onEdit",
            "onChange",
            "onSave"
        ],
        correctIndex: [0, 2, 3, 5],
        explanation: "Client Scripts: onSubmit, onCellEdit, onLoad, onChange.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Client Scripts: Submit CellEdit Load Change"
    },
    {
        id: 42,
        question: "Which type of tables may be extended by other tables, but do not extend another table?",
        options: [
            "Base Tables",
            "Core Tables",
            "Extended Tables",
            "Custom Tables"
        ],
        correctIndex: 0,
        explanation: "Base Tables can be extended but do not extend others.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Base Tables: Extendable"
    },
    {
        id: 43,
        question: "Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)",
        options: [
            "Service Processes",
            "User Permissions",
            "Tables and Fields",
            "A Database",
            "The Dependency View"
        ],
        correctIndex: [0, 2, 3, 4],
        explanation: "CMDB concepts: Service Processes, Tables and Fields, Database, Dependency View.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "CMDB: Processes Tables Database Dependency"
    },
    {
        id: 44,
        question: "What is a formatter?",
        options: [
            "A formatter allows you to configure applications on your instance",
            "A formatter is a form element used to display information that is not a field in the record",
            "A formatter allows you to populate fields automatically",
            "A formatter is a set of conditions applied to a table to help find and work with data"
        ],
        correctIndex: 1,
        explanation: "Formatter displays non-field information on a form.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Formatter: Non-field info"
    },
    {
        id: 45,
        question: "Which technique is used to get information from a series of referenced fields from different tables?",
        options: [
            "Table-Walking",
            "Sys_ID Pulling",
            "Dot-Walking",
            "Record-Hopping"
        ],
        correctIndex: 2,
        explanation: "Dot-Walking retrieves data from referenced fields across tables.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Dot-Walking: Referenced fields"
    },
    {
        id: 46,
        question: "What is a schema map?",
        options: [
            "A schema map enables administrators to define records from specific tables as trouble sources for Configuration Items",
            "A schema map graphically organizes the visual task boards for the CMDB",
            "A schema map graphically displays the Configuration Items that support a business service",
            "A schema map displays the details of tables and their relationships in a visual manner, allowing administrators to view and easily access different parts of the database schema"
        ],
        correctIndex: 3,
        explanation: "Schema map shows table relationships visually.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Schema Map: Visual table relationships"
    },
    {
        id: 47,
        question: "Which one of the following statements best describes the purpose of an Update Set?",
        options: [
            "An Update Set allows administrators to group a series of changes into a named set and then move this set as a unit to other systems",
            "By default, an Update Set includes customizations, Business Rules, and homepages",
            "An Update Set is a group of customizations that is moved from Production to Development",
            "By default, the changes included in an Update Set are visible only in the instance to which they are applied"
        ],
        correctIndex: 0,
        explanation: "Update Set groups changes for transfer between systems.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Update Set: Group changes transfer"
    },
    {
        id: 48,
        question: "Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)",
        options: [
            "Banner Image",
            "Record Number Format",
            "Browser Tab Title",
            "System Date Format",
            "Form Header Size"
        ],
        correctIndex: [0, 2, 3],
        explanation: "UI 16 customizes Banner Image, Browser Tab Title, System Date Format.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "UI 16: Banner Title Date"
    },
    {
        id: 49,
        question: "What information does the System Dictionary contain?",
        options: [
            "The human-readable labels and language settings",
            "The definition for each table and column",
            "The information on how tables relate to each other",
            "The language dictionary used for spell checking"
        ],
        correctIndex: 1,
        explanation: "System Dictionary contains definitions for tables and columns.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Dictionary: Table Column Definitions"
    },
    {
        id: 50,
        question: "When working on a form, what is the difference between Insert and Update operations?",
        options: [
            "Insert creates a new record and Update saves changes, both remain on the form",
            "Insert creates a new record and Update saves changes, both exit the form",
            "Insert saves changes and exits the form, Update saves changes and remains on the form",
            "Insert saves changes and remains on the form, Update saves changes and exits the form"
        ],
        correctIndex: 3,
        explanation: "Insert saves and stays, Update saves and exits.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Insert: Stay, Update: Exit"
    },
    {
        id: 51,
        question: "How is the Event Log different from the Event Registry?",
        options: [
            "Event Log contains generated Events, the Event Registry is a table of Event definitions",
            "Event Log is formatted in the Log style, the Event Registry displays different fields",
            "Event Log lists Events that were triggered by integrations, the Event Registry lists the Events that were triggered during the day (24-hour period)",
            "Event Log is the same as the Event Registry"
        ],
        correctIndex: 0,
        explanation: "Event Log: Generated events, Event Registry: Event definitions.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Event Log: Generated, Registry: Definitions"
    },
    {
        id: 52,
        question: "What is a Dictionary Override?",
        options: [
            "A Dictionary Override is an incoming customer update in an Update Set which applies to the same objects as a newer local customer update",
            "A Dictionary Override is the addition, modification, or removal of anything that could have an effect on IT services",
            "A Dictionary Override is a task within a flow that requests an action before the flow can continue",
            "A Dictionary Override sets field properties in extended tables"
        ],
        correctIndex: 3,
        explanation: "Dictionary Override sets field properties in extended tables.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Override: Field properties extended"
    },
    {
        id: 53,
        question: "What is the Import Set Table?",
        options: [
            "A table where data will be placed, post-transformation",
            "A table that determines relationships",
            "A staging area for imported records",
            "A repository for Update Set information"
        ],
        correctIndex: 2,
        explanation: "Import Set Table is a staging area for imported records.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Import Set: Staging area"
    },
    {
        id: 54,
        question: "What is a characteristic of importing data into ServiceNow?",
        options: [
            "An existing Transform Map can be used one time on the same import set",
            "Coalesce fields are used only after running Transform",
            "Any user can manage and set up import sets",
            "An existing Transform Map can be used multiple times on the same import set"
        ],
        correctIndex: 3,
        explanation: "Transform Map can be used multiple times on the same import set.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Import: Transform Map reuse"
    },
    {
        id: 55,
        question: "Which of the following allows a user to edit field values in a list without opening the form?",
        options: [
            "Data Editor",
            "Edit Menu",
            "List Editor",
            "Form Designer"
        ],
        correctIndex: 2,
        explanation: "List Editor allows editing field values in a list without opening the form.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Edit List: List Editor"
    },
    {
        id: 56,
        question: "How are Workflows moved between instances?",
        options: [
            "Workflows are moved using Update Sets",
            "Workflows are moved using Transform Maps",
            "Workflows are moved using Application Sets",
            "Workflows cannot be moved between instances"
        ],
        correctIndex: 0,
        explanation: "Workflows are moved using Update Sets.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Workflows: Update Sets"
    },
    {
        id: 57,
        question: "Which of the following statements is true when a new table is created by extending another table?",
        options: [
            "The new table archives the parent table and assumed its roles in the database",
            "The new table inherits all of the Business Rules, Client Scripts, and UI Policies of the parent table, but none of the existing fields",
            "The new table inherits all of the fields of the parent table and can also contain new fields unique to itself",
            "The new table inherits all of the fields, but does not inherit Access Control rules, Client Scripts, and UI Policies of the parent table"
        ],
        correctIndex: 2,
        explanation: "New table inherits parent fields and can have unique fields.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Extended Table: Inherits fields"
    },
    {
        id: 58,
        question: "A knowledge article must be which of the following states to display to a user?",
        options: [
            "Published",
            "Drafted",
            "Retired",
            "Reviewed"
        ],
        correctIndex: 0,
        explanation: "Knowledge articles must be Published to display to users.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Article Display: Published"
    },
    {
        id: 59,
        question: "What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?",
        options: [
            "Answer Agent",
            "live Feed",
            "Virtual Agent",
            "Connect Chat"
        ],
        correctIndex: 2,
        explanation: "Virtual Agent is the conversational bot platform.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Bot: Virtual Agent"
    },
    {
        id: 60,
        question: "What is the purpose of a Related List?",
        options: [
            "To create a one-to-many relationship",
            "To dot-walk to a core table",
            "To present related fields",
            "To present related records"
        ],
        correctIndex: 3,
        explanation: "Related List presents related records.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Related List: Related records"
    },
    {
        id: 61,
        question: "Which term best describes something that is created, has work performed upon it, and is eventually moved to a state of closed?",
        options: [
            "report",
            "flow",
            "event",
            "task"
        ],
        correctIndex: 3,
        explanation: "Tasks are created, worked on, and closed.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Task: Created Worked Closed"
    },
    {
        id: 62,
        question: "Which are valid ServiceNow User Authentication Methods? (Choose three.)",
        options: [
            "XML feed",
            "Local database",
            "LDAP",
            "SSO",
            "FTP authentication"
        ],
        correctIndex: [1, 2, 3],
        explanation: "Authentication methods: Local database, LDAP, SSO.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Auth: Local LDAP SSO"
    },
    {
        id: 63,
        question: "Access Control rules may be defined with which of the following permission requirements? (Choose three.)",
        options: [
            "Roles",
            "Conditional Expressions",
            "Assignment Rules",
            "Scripts",
            "User Criteria",
            "Groups"
        ],
        correctIndex: [0, 1, 3],
        explanation: "Access Control: Roles, Conditional Expressions, Scripts.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Access Control: Roles Conditions Scripts"
    },
    {
        id: 64,
        question: "How do you make a list filter available to everyone?",
        options: [
            "Make active, assign a name, and save",
            "Assign a group, set visibility, and save",
            "Assign a name, set visibility, and save",
            "Make active, set visibility, and save"
        ],
        correctIndex: 2,
        explanation: "List filter for all: Assign name, set visibility, save.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Filter for All: Name Visibility Save"
    },
    {
        id: 65,
        question: "What would NOT appear in the Application Navigator if 'service' is typed into the filter field?",
        options: [
            "Configuration > Business Services",
            "Self-Service > Knowledge",
            "Service Portal > Widgets",
            "Incident > Assigned to me"
        ],
        correctIndex: 3,
        explanation: "Incident > Assigned to me does not appear when filtering 'service'.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Filter Service: No Incident Assigned"
    },
    {
        id: 66,
        question: "Which of the following is used to categorize, flag, and locate records?",
        options: [
            "Search",
            "Favorites",
            "Tags",
            "Bookmarks"
        ],
        correctIndex: 2,
        explanation: "Tags are used to categorize, flag, and locate records.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Categorize: Tags"
    },
    {
        id: 67,
        question: "Which tool should be used to populate commonly used fields in a form?",
        options: [
            "Template",
            "Reference Qualifier",
            "Formatter",
            "Assignment Rule"
        ],
        correctIndex: 0,
        explanation: "Templates populate commonly used fields in a form.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Populate Fields: Template"
    },
    {
        id: 68,
        question: "What is a Notification?",
        options: [
            "A new Knowledge article created by a Business Rule",
            "A tool for alerting users that events that concern them have occurred",
            "A message through Connect related to a Change Request",
            "An email file attachment"
        ],
        correctIndex: 1,
        explanation: "Notifications alert users about relevant events.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Notification: Alert users"
    },
    {
        id: 69,
        question: "Which one of the following is NOT a type of Visual Task Board?",
        options: [
            "Flexible",
            "Freeform",
            "Feature",
            "Guided boards"
        ],
        correctIndex: 2,
        explanation: "Feature is not a type of Visual Task Board.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "VTB: Not Feature"
    },
    {
        id: 70,
        question: "What are the three components of a filter condition?",
        options: [
            "Field, Operator, and Value",
            "Condition, Operator, and Value",
            "Field, Condition, and Value",
            "Field, Operator, and Condition"
        ],
        correctIndex: 0,
        explanation: "Filter condition components: Field, Operator, Value.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Filter: Field Operator Value"
    },
    {
        id: 71,
        question: "Which one of the following describes the primary function of a Business Rule?",
        options: [
            "To generate an email notification to a user based on a specified time",
            "To automatically populate the short description for an incident",
            "To standardize data in a field",
            "To modify or validate forms or record data when conditions are met"
        ],
        correctIndex: 3,
        explanation: "Business Rules modify or validate data when conditions are met.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Business Rule: Modify Validate"
    },
    {
        id: 72,
        question: "Which one of the following statements is true about the Default Update Set?",
        options: [
            "The Default Update Set is locked by default",
            "The Default Update Set is used for handling customizations",
            "Changes in the Default Update Set are automatically moved to production",
            "The Default Update Set is automatically included in all transfer operations"
        ],
        correctIndex: 1,
        explanation: "Default Update Set is used for handling customizations.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Default Update Set: Customizations"
    },
    {
        id: 73,
        question: "What is a benefit of using flow designer?",
        options: [
            "Reduces development costs",
            "Increases the need for scripting",
            "Eliminates the need for update sets",
            "Requires extensive coding knowledge"
        ],
        correctIndex: 0,
        explanation: "Flow Designer reduces development costs.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Flow Designer: Reduce costs"
    },
    {
        id: 74,
        question: "What module would you use to configure the default sort order of search results in the Service Catalog?",
        options: [
            "Search Settings",
            "Catalog Definitions",
            "Catalog UI Policies",
            "Order Guides"
        ],
        correctIndex: 1,
        explanation: "Catalog Definitions configure default sort order for Service Catalog search.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Sort Order: Catalog Definitions"
    },
    {
        id: 75,
        question: "What is the primary purpose of the Service Catalog?",
        options: [
            "To manage IT assets",
            "To provide a platform for users to request services",
            "To generate reports on system performance",
            "To configure system security"
        ],
        correctIndex: 1,
        explanation: "Service Catalog provides a platform for users to request services.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Catalog Purpose: Request services"
    },
    {
        id: 76,
        question: "Which of the following is true about UI Policies?",
        options: [
            "They can only be applied to new records",
            "They dynamically change the behavior of forms and fields",
            "They are used to define database triggers",
            "They require server-side scripts to function"
        ],
        correctIndex: 1,
        explanation: "UI Policies dynamically change form and field behavior.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "UI Policy: Dynamic form behavior"
    },
    {
        id: 77,
        question: "What does the 'coalesce' option do during data import?",
        options: [
            "Combines multiple import sets into one",
            "Updates an existing record if a match is found, or creates a new one if not",
            "Deletes duplicate records automatically",
            "Validates the data format before import"
        ],
        correctIndex: 1,
        explanation: "Coalesce updates existing or creates new records based on matches.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Coalesce: Update or create"
    },
    {
        id: 78,
        question: "Which field on a form is used to indicate the priority of an incident?",
        options: [
            "Urgency",
            "Impact",
            "Priority",
            "Severity"
        ],
        correctIndex: 2,
        explanation: "Priority field indicates the priority of an incident.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Incident Priority: Priority field"
    },
    {
        id: 79,
        question: "What is the purpose of the 'Assignment Group' field in an incident?",
        options: [
            "To assign the incident to a specific user",
            "To categorize the incident type",
            "To assign the incident to a group of users for resolution",
            "To track the incident history"
        ],
        correctIndex: 2,
        explanation: "Assignment Group assigns incidents to a group for resolution.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Assignment Group: Group resolution"
    },
    {
        id: 80,
        question: "Which of the following can be used to automate the assignment of tasks?",
        options: [
            "Business Rules",
            "UI Policies",
            "Assignment Rules",
            "Client Scripts"
        ],
        correctIndex: 2,
        explanation: "Assignment Rules automate task assignments.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Task Automation: Assignment Rules"
    },
    {
        id: 81,
        question: "What is the default view for a new user in ServiceNow?",
        options: [
            "Self-Service",
            "Essentials",
            "ITIL",
            "Administrator"
        ],
        correctIndex: 1,
        explanation: "Default view for new users is Essentials.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Default View: Essentials"
    },
    {
        id: 82,
        question: "Which of the following is a valid state for an incident?",
        options: [
            "Draft",
            "In Progress",
            "Archived",
            "Pending Review"
        ],
        correctIndex: 1,
        explanation: "In Progress is a valid incident state.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Incident State: In Progress"
    },
    {
        id: 83,
        question: "What is the purpose of the 'Activity Stream' in a record?",
        options: [
            "To display a timeline of all updates and comments",
            "To show the current workflow status",
            "To list all related incidents",
            "To provide a summary of the record"
        ],
        correctIndex: 0,
        explanation: "Activity Stream shows a timeline of updates and comments.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Activity Stream: Updates Comments"
    },
    {
        id: 84,
        question: "Which role is required to create and manage reports in ServiceNow?",
        options: [
            "itil",
            "report_user",
            "admin",
            "catalog_admin"
        ],
        correctIndex: 1,
        explanation: "report_user role is required for creating and managing reports.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Reports Role: report_user"
    },
    {
        id: 85,
        question: "What is the function of the 'Reference' field type?",
        options: [
            "To store a URL link",
            "To create a relationship to another table",
            "To allow multiple selections",
            "To store encrypted data"
        ],
        correctIndex: 1,
        explanation: "Reference field creates a relationship to another table.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Reference: Table relationship"
    },
    {
        id: 86,
        question: "Which of the following is used to schedule a report to run automatically?",
        options: [
            "Report Scheduler",
            "Dashboard Scheduler",
            "Email Notification",
            "Workflow Scheduler"
        ],
        correctIndex: 0,
        explanation: "Report Scheduler is used to schedule reports to run automatically.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "Report Schedule: Report Scheduler"
    },
    {
        id: 87,
        question: "What is the purpose of the 'SLA' (Service Level Agreement) in ServiceNow?",
        options: [
            "To define the cost of services",
            "To set performance targets and measure compliance",
            "To manage user permissions",
            "To create custom forms"
        ],
        correctIndex: 1,
        explanation: "SLA sets performance targets and measures compliance.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "SLA: Performance targets"
    },
    {
        id: 88,
        question: "Which module is used to manage user accounts and profiles?",
        options: [
            "User Administration",
            "Group Management",
            "Role Management",
            "Profile Settings"
        ],
        correctIndex: 0,
        explanation: "User Administration manages user accounts and profiles.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "User Management: User Administration"
    },
    {
        id: 89,
        question: "What is the primary function of the 'Configuration Management Database' (CMDB)?",
        options: [
            "To store financial data",
            "To maintain a repository of all configuration items and their relationships",
            "To manage user authentication",
            "To generate automated emails"
        ],
        correctIndex: 1,
        explanation: "CMDB maintains a repository of configuration items and relationships.",
        weight: "Other Topics (42%)",
        category: "Other Topics",
        memorizationTip: "CMDB: Configuration items relationships"
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
    },
    {
        question: "What are the different interfaces for accessing a ServiceNow Instance?",
        answer: "Now Platform User Interface, Service Portal, ServiceNow Mobile Classic, ServiceNow Agent."
    },
    {
        question: "What are the three components of the Now Platform User Interface?",
        answer: "Banner Frame, Application Navigator, Content Frame."
    },
    {
        question: "What is a collection of users who share a common purpose?",
        answer: "Group."
    },
    {
        question: "Where can you locate product documentation?",
        answer: "docs.servicenow.com."
    },
    {
        question: "What is a collection of permissions used to grant access to different parts of the platform?",
        answer: "Role."
    },
    {
        question: "What is a common way of testing functionality for different roles?",
        answer: "Impersonate User."
    },
    {
        question: "A row represents what in the ServiceNow database?",
        answer: "Record."
    },
    {
        question: "What are the three different types of context menus in a list view?",
        answer: "List, Column, Record."
    },
    {
        question: "What are the three components of a filter condition?",
        answer: "Field, Operator, Value."
    },
    {
        question: "What defines which fields appear in a list and the order of said fields?",
        answer: "View."
    },
    {
        question: "Which field type displays as a check box on the form?",
        answer: "True/False."
    },
    {
        question: "Which field type displays information from another table?",
        answer: "Reference."
    },
    {
        question: "Which tool can be used to change the layout of the form view for all users?",
        answer: "Form Designer."
    },
    {
        question: "What are the three main components of the Form Designer?",
        answer: "Page Header, Field Navigator, Form Layout."
    },
    {
        question: "What allows fields to be populated automatically when applied?",
        answer: "Template."
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

// Global indexMap to store mapping of shuffled indices to original indices
let indexMap = {};

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

// Function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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
    } else {
        // If no progress, initialize defaults
        saveProgress(); // Save initial state to avoid issues on clear
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

    submitButton.addEventListener('click', submitAnswer);
    nextButton.addEventListener('click', nextQuestion);
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
    
    // Shuffle options to randomize display order
    const shuffledOptions = shuffleArray([...current.options.map((option, index) => ({ option, index }))]);
    
    // Store mapping of shuffled indices to original indices
    indexMap = {};
    shuffledOptions.forEach((item, shuffledIndex) => {
        indexMap[shuffledIndex] = item.index;
    });
    
    // Add new options
    shuffledOptions.forEach((item, shuffledIndex) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = item.option;
        optionElement.dataset.index = shuffledIndex;
        
        optionElement.addEventListener('click', () => {
            // Deselect previously selected option
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Select new option
            optionElement.classList.add('selected');
            userState.selectedOption = indexMap[shuffledIndex]; // Use original index
            submitButton.disabled = false;
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Update mark button state
    updateMarkButton();
    
    // Reset UI state
    submitButton.disabled = true;
    nextButton.disabled = true;
    feedbackContainer.style.display = 'none';
    
    // Remove highlight classes
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });
}

function submitAnswer() {
    const current = questions[userState.currentQuestion];
    const isCorrect = Array.isArray(current.correctIndex)
        ? current.correctIndex.includes(userState.selectedOption)
        : userState.selectedOption === current.correctIndex;
    
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
        feedbackMessage.textContent = `The correct answer is: ${
            Array.isArray(current.correctIndex)
                ? current.correctIndex.map(i => current.options[i]).join(', ')
                : current.options[current.correctIndex]
        }`;
        xpEarnedElement.textContent = '+0 XP earned';
    }
    
    // Show explanation and memorization tip
    explanationElement.textContent = current.explanation;
    memorizationTipElement.textContent = current.memorizationTip;
    
    // Highlight correct and incorrect answers
    document.querySelectorAll('.option').forEach(option => {
        const index = parseInt(option.dataset.index);
        const originalIndex = indexMap[index];
        if (Array.isArray(current.correctIndex)) {
            if (current.correctIndex.includes(originalIndex)) {
                option.classList.add('correct');
            } else if (originalIndex === userState.selectedOption && !isCorrect) {
                option.classList.add('incorrect');
            }
        } else {
            if (originalIndex === current.correctIndex) {
                option.classList.add('correct');
            } else if (originalIndex === userState.selectedOption && !isCorrect) {
                option.classList.add('incorrect');
            }
        }
    });
    
    // Disable options after submission
    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Enable Next Question button
    nextButton.disabled = false;
    
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
            <div class="review-answer">Correct answer: ${
                Array.isArray(question.correctIndex)
                    ? question.correctIndex.map(i => question.options[i]).join(', ')
                    : question.options[question.correctIndex]
            }</div>
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

    // Reset selected option and enable submit button only when new option selected
    userState.selectedOption = null;
    submitButton.disabled = true;

    // Hide feedback for next question
    feedbackContainer.style.display = 'none';

    // Remove highlight classes from options
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('correct', 'incorrect');
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
    // Calculate actual question counts per category
    const categoryCounts = {
        "Platform Overview": 0,
        "Instance Configuration": 0,
        "Config Apps for Collaboration": 0,
        "Self Service and Automation": 0,
        "Other Topics": 0
    };
    questions.forEach(q => {
        // Normalize category names if needed
        if (q.category === "Platform Overview" || q.category === "User Interface & Navigation") categoryCounts["Platform Overview"]++;
        else if (q.category === "Instance Configuration") categoryCounts["Instance Configuration"]++;
        else if (q.category === "Config Apps for Collaboration" || q.category === "Collaboration") categoryCounts["Config Apps for Collaboration"]++;
        else if (q.category === "Self Service and Automation" || q.category === "Self-Service & Process Automation") categoryCounts["Self Service and Automation"]++;
        else categoryCounts["Other Topics"]++;
    });

    progressPlatform.textContent = `${userState.categoryProgress["Platform Overview"].answered}/${categoryCounts["Platform Overview"]}`;
    progressDatabase.textContent = `${userState.categoryProgress["Instance Configuration"].answered}/${categoryCounts["Instance Configuration"]}`;
    progressAutomation.textContent = `${userState.categoryProgress["Config Apps for Collaboration"].answered}/${categoryCounts["Config Apps for Collaboration"]}`;
    progressConfig.textContent = `${userState.categoryProgress["Self Service and Automation"].answered}/${categoryCounts["Self Service and Automation"]}`;
    progressIntegration.textContent = `${userState.categoryProgress["Other Topics"].answered}/${categoryCounts["Other Topics"]}`;
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

// Initialize the app when page loads
window.addEventListener('load', initApp);

