// ==========================================================================
// INITIALIZE FIREBASE SDK (V10 COMPAT)
// ==========================================================================
const firebaseConfig = {
  apiKey: "AIzaSyAhe73TunM32HzrIeQc8ZuM1XdAr0o6ZLo",
  authDomain: "lmi-3f606.firebaseapp.com",
  databaseURL: "https://lmi-3f606-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lmi-3f606",
  storageBucket: "lmi-3f606.firebasestorage.app",
  messagingSenderId: "622111316335",
  appId: "1:622111316335:web:e417afb5a33903deeb309a",
  measurementId: "G-E4SE63RB7B"
};

// Initialize Firebase using compat CDN SDK
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ==========================================================================
// TRANSLATION DICTIONARY (KHMER & ENGLISH)
// ==========================================================================
const translations = {
    km: {
        // Menu & Navigation
        menu_dashboard: "ផ្ទាំងគ្រប់គ្រង",
        menu_dashboard_short: "ផ្ទាំងគ្រប់គ្រង",
        menu_add: "ចុះឈ្មោះអតិថិជន",
        menu_add_short: "ចុះឈ្មោះ",
        menu_list: "បញ្ជីអតិថិជន",
        menu_list_short: "បញ្ជី",
        menu_repayments: "ប្រវត្តិអ្នកសង",
        menu_repayments_short: "ប្រវត្តិសង",
        menu_settings: "ការកំណត់",
        menu_settings_short: "កំណត់",
        btn_logout: "ចាកចេញ",
        admin_role: "អ្នកគ្រប់គ្រង",
        cloud_synced: "ពពកភ្ជាប់រួចរាល់",
        cloud_status: "ស្ថានភាព Cloud",
        
        // Dashboard
        stat_total_borrowers: "ចំនួនអ្នកចងការសរុប",
        stat_total_riel: "សរុបប្រាក់រៀល (KHR)",
        stat_total_usd: "សរុបប្រាក់ដុល្លា (USD)",
        recent_activity_title: "សកម្មភាពអ្នកចងការថ្មីៗ (១០នាក់ចុងក្រោយ)",
        no_data: "មិនទាន់មានទិន្នន័យនៅឡើយទេ",
        active_status: "កំពុងចងការ",
        paid_status: "សងរួចរាល់",
        
        // Add Form
        form_add_title: "ចុះឈ្មោះអ្នកចងការប្រាក់ថ្មី",
        form_id: "លេខសម្គាល់អតិថិជន",
        form_name: "ឈ្មោះអតិថិជន",
        form_phone: "លេខទូរសព្ទ",
        form_village: "អាសយដ្ឋានភូមិ",
        form_custom_village: "វាយឈ្មោះភូមិបន្ថែម",
        form_amount: "ចំនួនទឹកប្រាក់ចងការ",
        form_interest: "ការប្រាក់ក្នុង១ខែ (%)",
        form_total_interest: "សរុបប្រាក់ការ",
        form_total_repay: "សរុបប្រាក់ត្រូវសង",
        form_date: "ថ្ងៃខែឆ្នាំចងការ",
        form_has_collateral: "វត្ថុបញ្ចាំ",
        form_collateral_detail: "លម្អិតវត្ថុបញ្ចាំ",
        btn_save: "រក្សាទុកទិន្នន័យ",
        opt_other: "ផ្សេងៗ (វាយបញ្ចូលបន្ថែម)",
        opt_yes: "មាន",
        opt_no: "គ្មាន",
        
        // List Section
        list_title: "Borrower Information List",
        all_villages: "ភូមិទាំងអស់",
        village_others: "ផ្សេងៗ",
        tbl_id: "លេខសម្គាល់",
        tbl_name: "ឈ្មោះ",
        tbl_phone: "លេខទូរសព្ទ",
        tbl_village: "ភូមិ",
        tbl_amount: "ចំនួនទឹកប្រាក់",
        tbl_interest_rate: "ការប្រាក់ (%)",
        tbl_date: "ថ្ងៃចងការ",
        tbl_collateral: "វត្ថុបញ្ចាំ",
        tbl_status: "ស្ថានភាព",
        tbl_actions: "សកម្មភាព",
        
        // Actions
        btn_pay: "សងប្រាក់",
        btn_edit: "កែប្រែ",
        btn_print: "ព្រីន",
        btn_delete: "លុប",
        confirm_delete: "តើអ្នកពិតជាចង់លុបអតិថិជននេះមែនទេ? ទិន្នន័យទាំងអស់នឹងត្រូវបាត់បង់!",
        
        // Settings Page
        setting_theme_lang: "ភាសា និង ពណ៌ប្រព័ន្ធ",
        setting_lang: "ភាសារបស់ប្រព័ន្ធ",
        setting_theme_color: "ពណ៌ប្រព័ន្ធ (ជ្រើសរើសបាន ១០ពណ៌)",
        setting_data_backup: "ការគ្រប់គ្រង និង បម្រុងទុកទិន្នន័យ",
        backup_desc: "ទិន្នន័យរបស់អ្នកត្រូវបានរក្សាទុកដោយស្វ័យប្រវត្តិនៅលើ Cloud (Firebase Realtime Database)។ លោកអ្នកក៏អាចទាញយកទិន្នន័យ ឬបញ្ចូលទិន្នន័យជាឯកសារ CSV បានផងដែរ។",
        btn_export: "ទាញយកជាឯកសារ CSV (Download)",
        btn_import: "បញ្ចូលទិន្នន័យពីឯកសារ CSV (Upload)",
        cloud_config_title: "ព័ត៌មានភ្ជាប់ Cloud",
        setting_security: "ប្រព័ន្ធសុវត្ថិភាព និង ការផ្លាស់ប្តូរលេខកូដសម្ងាត់",
        lbl_old_password: "លេខសម្ងាត់ចាស់",
        lbl_new_password: "លេខសម្ងាត់ថ្មី",
        btn_update_password: "ធ្វើបច្ចុប្បន្នភាពលេខសម្ងាត់",
        
        // Modals
        modal_edit_title: "កែប្រែព័ត៌មានអ្នកចងការប្រាក់",
        form_amount_outstanding: "ចំនួនទឹកប្រាក់ជំពាក់បច្ចុប្បន្ន",
        btn_cancel: "បោះបង់",
        btn_save_changes: "រក្សាទុកការផ្លាស់ប្តូរ",
        
        modal_repayment_title: "ប្រតិបត្តិការសងប្រាក់",
        lbl_outstanding_loan: "ប្រាក់ជំពាក់សរុប៖",
        form_repay_type: "ប្រភេទនៃការសងប្រាក់",
        opt_repay_partial: "សងខ្លះ (Partial Repayment)",
        opt_repay_full: "សងទាំងអស់ (Full Repayment)",
        form_repay_amount: "ចំនួនទឹកប្រាក់ត្រូវសង",
        form_repay_date: "ថ្ងៃខែឆ្នាំសង",
        form_repay_note: "កំណត់សម្គាល់បន្ថែម",
        btn_submit_payment: "បញ្ជូនការបង់ប្រាក់",
        lbl_repay_history: "ប្រវត្តិនៃការសងប្រាក់",
        no_history: "មិនទាន់មានប្រវត្តិសងប្រាក់នៅឡើយទេ",
        tbl_type: "ប្រភេទ",
        tbl_note: "កំណត់សម្គាល់",
        
        // Print Receipt
        modal_print_title: "មើលការបង្ហាញបោះពុម្ភវិក្កយបត្រ",
        receipt_sub: "ទូរសព្ទទំនាក់ទំនង៖ 012 345 678 | 098 765 432",
        receipt_headline: "វិក្កយបត្រព័ត៌មានឥណទាន",
        lbl_loan_capital: "ប្រាក់ចងការសរុប៖",
        lbl_interest_rate_monthly: "ការប្រាក់ក្នុង១ខែ៖",
        lbl_interest_amount_monthly: "ការប្រាក់ត្រូវបង់ក្នុង១ខែ៖",
        receipt_payment_history: "ប្រវត្តិបង់ប្រាក់កន្លងមក",
        receipt_thank_you: "សូមអរគុណចំពោះការប្រើប្រាស់សេវាកម្មរបស់យើងខ្ញុំ!",
        receipt_sign_borrower: "ស្នាមមេដៃអតិថិជន",
        receipt_sign_lender: "ហត្ថលេខាអ្នកចងការ",
        btn_close: "បិទ",
        btn_share: "ចែករំលែក",
        
        // Messages
        msg_auth_failed: "Incorrect PIN/Password!",
        msg_password_changed: "Password changed successfully!",
        msg_wrong_old_password: "Old password is incorrect!",
        msg_save_success: "រក្សាទុកទិន្នន័យបានជោគជ័យ!",
        msg_update_success: "ធ្វើបច្ចុប្បន្នភាពបានជោគជ័យ!",
        msg_delete_success: "បានលុបទិន្នន័យជោគជ័យ!",
        msg_repay_success: "ប្រតិបត្តិការសងប្រាក់បានជោគជ័យ!",
        msg_import_success: "បានបញ្ចូលទិន្នន័យពី CSV បានជោគជ័យ!",
        msg_invalid_csv: "ឯកសារ CSV មិនត្រឹមត្រូវតាមទម្រង់កំណត់ទេ!",
        msg_repay_limit: "ចំនួនទឹកប្រាក់សងមិនអាចធំជាងប្រាក់ជំពាក់ឡើយ!",
        tbl_repay_amount: "ចំនួនទឹកប្រាក់សង",
        tbl_repay_date: "កាលបរិច្ឆេទសង",
        tbl_repay_type: "ប្រភេទសង",
        confirm_delete_payment: "តើអ្នកពិតជាចង់លុបប្រវត្តិសងប្រាក់នេះមែនទេ? ប្រាក់ជំពាក់របស់អតិថិជននឹងត្រូវបូកត្រឡប់មកវិញ!",
        msg_delete_payment_success: "បានលុបប្រវត្តិសងប្រាក់ជោគជ័យ!",
        filter_payment_type: "ប្រភេទបង់ប្រាក់ទាំងអស់",
        filter_currency: "រូបិយប័ណ្ណទាំងអស់",
        lbl_repay_category: "លម្អិតការសងប្រាក់",
        opt_repay_interest_and_principal: "សងការប្រាក់និងប្រាក់ដើមខ្លះ",
        opt_repay_interest_only: "សងតែការប្រាក់",
        lbl_duration: "រយៈពេលខ្ចី",
        lbl_days: "ថ្ងៃ",
        lbl_months: "ខែ",
        lbl_principal: "ប្រាក់ដើម",
        lbl_total_interest_due: "ការប្រាក់សរុប",
        lbl_total_repayment: "សរុបត្រូវសង",
        btn_borrow_more: "ខ្ចីថែម",
        modal_borrow_more_title: "ប្រតិបត្តិការខ្ចីប្រាក់បន្ថែម",
        lbl_borrow_more_amount: "ចំនួនទឹកប្រាក់ខ្ចីថែម",
        lbl_borrow_more_date: "ថ្ងៃខែឆ្នាំខ្ចីប្រាក់",
        lbl_new_total_debt: "សរុបប្រាក់ជំពាក់ថ្មី",
        btn_submit_borrow_more: "បញ្ជូនការខ្ចីប្រាក់",
        msg_borrow_more_success: "ប្រតិបត្តិការខ្ចីប្រាក់បន្ថែមបានជោគជ័យ!"
    },
    en: {
        // Menu & Navigation
        menu_dashboard: "Dashboard",
        menu_dashboard_short: "Dashboard",
        menu_add: "Add Borrower",
        menu_add_short: "Add New",
        menu_list: "Borrowers List",
        menu_list_short: "List",
        menu_repayments: "Repayment History",
        menu_repayments_short: "Repayments",
        menu_settings: "Settings",
        menu_settings_short: "Settings",
        btn_logout: "Logout",
        admin_role: "Administrator",
        cloud_synced: "Cloud Sync Ready",
        cloud_status: "Cloud Status",
        
        // Dashboard
        stat_total_borrowers: "Total Borrowers",
        stat_total_riel: "Total KHR Amount",
        stat_total_usd: "Total USD Amount",
        recent_activity_title: "Recent Borrowers (Last 10 Activities)",
        no_data: "No data available yet",
        active_status: "Active",
        paid_status: "Fully Paid",
        
        // Add Form
        form_add_title: "Register New Borrower",
        form_id: "Customer ID",
        form_name: "Customer Name",
        form_phone: "Phone Number",
        form_village: "Village Address",
        form_custom_village: "Enter Custom Village",
        form_amount: "Loan Capital Amount",
        form_interest: "Interest Rate/Month (%)",
        form_total_interest: "Total Interest",
        form_total_repay: "Total Repayable",
        form_date: "Loan Date",
        form_has_collateral: "Collateral Item",
        form_collateral_detail: "Collateral Details",
        btn_save: "Save Borrower Record",
        opt_other: "Others (Enter custom)",
        opt_yes: "Yes (Available)",
        opt_no: "No (None)",
        
        // List Section
        list_title: "Borrowers List",
        all_villages: "All Villages",
        village_others: "Others",
        tbl_id: "ID",
        tbl_name: "Name",
        tbl_phone: "Phone",
        tbl_village: "Village",
        tbl_amount: "Amount",
        tbl_interest_rate: "Interest (%)",
        tbl_date: "Date",
        tbl_collateral: "Collateral",
        tbl_status: "Status",
        tbl_actions: "Actions",
        
        // Actions
        btn_pay: "Repay",
        btn_edit: "Edit",
        btn_print: "Print",
        btn_delete: "Delete",
        confirm_delete: "Are you sure you want to delete this customer? All data will be permanently removed!",
        
        // Settings Page
        setting_theme_lang: "Language & System Theme",
        setting_lang: "System Language",
        setting_theme_color: "Theme Color (Choose from 10 colors)",
        setting_data_backup: "Data Management & Backup",
        backup_desc: "Your data is automatically synced to the Cloud (Firebase Realtime Database). You can also download or upload data using CSV files.",
        btn_export: "Export to CSV File (Download)",
        btn_import: "Import from CSV File (Upload)",
        cloud_config_title: "Cloud Connection Details",
        setting_security: "Security System & Password Settings",
        lbl_old_password: "Old Password",
        lbl_new_password: "New Password",
        btn_update_password: "Update Password Key",
        
        // Modals
        modal_edit_title: "Edit Borrower Details",
        form_amount_outstanding: "Current Outstanding Amount",
        btn_cancel: "Cancel",
        btn_save_changes: "Save Changes",
        
        modal_repayment_title: "Repayment Transaction",
        lbl_outstanding_loan: "Total Outstanding Loan:",
        form_repay_type: "Repayment Type",
        opt_repay_partial: "Partial Repayment",
        opt_repay_full: "Full Repayment",
        form_repay_amount: "Repayment Amount",
        form_repay_date: "Payment Date",
        form_repay_note: "Repayment Note/Details",
        btn_submit_payment: "Submit Payment",
        lbl_repay_history: "Repayment History Logs",
        no_history: "No repayment logs found",
        tbl_type: "Type",
        tbl_note: "Notes",
        
        // Print Receipt
        modal_print_title: "Invoice Print Preview",
        receipt_sub: "Contact Numbers: 012 345 678 | 098 765 432",
        receipt_headline: "Loan Information Statement",
        lbl_loan_capital: "Total Capital Loan:",
        lbl_interest_rate_monthly: "Monthly Interest Rate:",
        lbl_interest_amount_monthly: "Monthly Interest Payment:",
        receipt_payment_history: "Payment Statement History",
        receipt_thank_you: "Thank you for using our micro-loan services!",
        receipt_sign_borrower: "Borrower Thumbprint",
        receipt_sign_lender: "Lender Signature",
        btn_close: "Close",
        btn_share: "Share",
        
        // Messages
        msg_auth_failed: "Incorrect PIN/Password!",
        msg_password_changed: "Password changed successfully!",
        msg_wrong_old_password: "Old password is incorrect!",
        msg_save_success: "Borrower saved successfully!",
        msg_update_success: "Record updated successfully!",
        msg_delete_success: "Record deleted successfully!",
        msg_repay_success: "Repayment logged successfully!",
        msg_import_success: "CSV data imported successfully!",
        msg_invalid_csv: "Invalid CSV file formatting!",
        msg_repay_limit: "Repayment cannot exceed outstanding balance!",
        tbl_repay_amount: "Repaid Amount",
        tbl_repay_date: "Payment Date",
        tbl_repay_type: "Payment Type",
        confirm_delete_payment: "Are you sure you want to delete this repayment record? The outstanding debt will be added back!",
        msg_delete_payment_success: "Repayment log deleted successfully!",
        filter_payment_type: "All Payment Types",
        filter_currency: "All Currencies",
        lbl_repay_category: "Repayment Option",
        opt_repay_interest_and_principal: "Repay Interest & Principal",
        opt_repay_interest_only: "Repay Interest Only",
        lbl_duration: "Borrowed Duration",
        lbl_days: "Days",
        lbl_months: "Months",
        lbl_principal: "Principal",
        lbl_total_interest_due: "Total Interest",
        lbl_total_repayment: "Total Repayable",
        btn_borrow_more: "Borrow More",
        modal_borrow_more_title: "Borrow More Operation",
        lbl_borrow_more_amount: "Additional Borrow Amount",
        lbl_borrow_more_date: "Borrowing Date",
        lbl_new_total_debt: "New Total Debt",
        btn_submit_borrow_more: "Submit Borrowing",
        msg_borrow_more_success: "Successfully recorded additional borrowing!"
    }
};

// State Variables
let currentLanguage = localStorage.getItem("lmi_lang") || "km";
let currentTheme = localStorage.getItem("lmi_theme") || "indigo";
let borrowersData = {};
let inactivityTimeout = null;
let activePrintKey = null;

// ==========================================================================
// TOAST NOTIFICATIONS (PREMIUM UI FEEDBACK)
// ==========================================================================
function showToast(message, type = "success") {
    // Create toast container if it doesn't exist
    let container = document.getElementById("toastContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type} animate-up`;
    
    let icon = '<i class="fa-solid fa-circle-check"></i>';
    if (type === "error") {
        icon = '<i class="fa-solid fa-circle-exclamation"></i>';
    } else if (type === "warning") {
        icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
    }
    
    toast.innerHTML = `${icon} <span class="toast-message">${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Add CSS for toast container dynamically if not present
const style = document.createElement('style');
style.textContent = `
.toast-container {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 320px;
    width: calc(100% - 48px);
}
.toast {
    background-color: var(--bg-card);
    border-left: 5px solid var(--primary-color);
    box-shadow: var(--shadow-premium);
    padding: 16px 20px;
    border-radius: var(--border-radius-md);
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--text-main);
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
}
.toast-success { border-left-color: var(--color-success); }
.toast-error { border-left-color: var(--color-danger); }
.toast-warning { border-left-color: var(--color-warning); }
.toast i { font-size: 18px; }
.toast-success i { color: var(--color-success); }
.toast-error i { color: var(--color-danger); }
.toast-warning i { color: var(--color-warning); }
`;
document.head.appendChild(style);

// ==========================================================================
// TRANSLATION ENGINE & LANGUAGE SELECT
// ==========================================================================
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("lmi_lang", lang);
    
    // Update active button state
    const btnKh = document.getElementById("btnLangKh");
    const btnEn = document.getElementById("btnLangEn");
    if (btnKh && btnEn) {
        if (lang === "km") {
            btnKh.classList.add("active");
            btnEn.classList.remove("active");
        } else {
            btnEn.classList.add("active");
            btnKh.classList.remove("active");
        }
    }
    
    // Translate standard elements
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Input Placeholders dynamically based on language
    updatePlaceholders();
    
    // Refresh tables to format headers and statuses
    renderRecentBorrowersTable();
    renderBorrowersTableList();
    renderRepaymentsHistoryTable();
    
    // Adjust Page Title
    const activeMenuItem = document.querySelector(".menu-item.active");
    if (activeMenuItem) {
        const span = activeMenuItem.querySelector("span");
        if (span) {
            document.getElementById("pageTitle").textContent = span.textContent;
        }
    }
}

function updatePlaceholders() {
    const isEn = currentLanguage === "en";
    const nameInput = document.getElementById("borrowerName");
    const phoneInput = document.getElementById("borrowerPhone");
    const customVillageInput = document.getElementById("borrowerCustomVillage");
    const amountInput = document.getElementById("loanAmount");
    const interestInput = document.getElementById("interestRate");
    const searchInput = document.getElementById("searchBorrower");
    const oldPassInput = document.getElementById("oldPassword");
    const newPassInput = document.getElementById("newPassword");
    const repayAmountInput = document.getElementById("repayAmount");
    const collateralArea = document.getElementById("collateralDetail");
    
    if (nameInput) nameInput.placeholder = isEn ? "Enter name" : "បញ្ចូលឈ្មោះ";
    if (phoneInput) phoneInput.placeholder = isEn ? "Enter phone number" : "បញ្ចូលលេខទូរសព្ទ";
    if (customVillageInput) customVillageInput.placeholder = isEn ? "Enter new village name" : "បញ្ចូលឈ្មោះភូមិថ្មី";
    if (amountInput) amountInput.placeholder = "0.00";
    if (interestInput) interestInput.placeholder = isEn ? "E.g. 5" : "ឧទាហរណ៍៖ 5";
    if (searchInput) searchInput.placeholder = isEn ? "Search by Name, ID, Phone..." : "ស្វែងរកតាមឈ្មោះ, លេខសម្គាល់, លេខទូរសព្ទ...";
    const searchRepayment = document.getElementById("searchRepayment");
    if (searchRepayment) searchRepayment.placeholder = isEn ? "Search by Name, ID, Phone, Notes..." : "ស្វែងរកតាមឈ្មោះ, ID, លេខទូរសព្ទ, កំណត់សម្គាល់...";
    if (oldPassInput) oldPassInput.placeholder = "••••";
    if (newPassInput) newPassInput.placeholder = "••••";
    if (repayAmountInput) repayAmountInput.placeholder = "0.00";
    if (collateralArea) collateralArea.placeholder = isEn ? "E.g. Land Title, Motorcycle..." : "ឧទាហរណ៍៖ ប្លង់ដី ម៉ូតូ កាតគ្រី...";
}

// Global scope hooks
window.changeLanguage = changeLanguage;

// ==========================================================================
// SYSTEM THEME MANAGEMENT
// ==========================================================================
function setTheme(themeName) {
    // Remove previous theme classes from body
    const themeClasses = Array.from(document.body.classList).filter(c => c.startsWith("theme-"));
    themeClasses.forEach(c => document.body.classList.remove(c));
    
    // Add new theme class
    document.body.classList.add(`theme-${themeName}`);
    currentTheme = themeName;
    localStorage.setItem("lmi_theme", themeName);
    
    // Update checkmark state in settings menu
    const themeCards = document.querySelectorAll(".theme-option");
    themeCards.forEach(card => {
        if (card.classList.contains(`theme-${themeName}`)) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });

    // Save selected theme in Firebase under cloud settings
    db.ref("settings").update({ theme: themeName }).catch(err => console.warn("Firebase settings theme update failed: ", err));
}
window.setTheme = setTheme;

// Authentication checks removed by request

// ==========================================================================
// TAB PANELS NAVIGATION
// ==========================================================================
function switchTab(tabId) {
    // Deactivate all sidebar and mobile navigation active states
    document.querySelectorAll(".menu-item").forEach(item => {
        if (item.getAttribute("href") === `#${tabId}`) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
    
    document.querySelectorAll(".mobile-nav-item").forEach(item => {
        if (item.getAttribute("href") === `#${tabId}`) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Hide all tab panes
    document.querySelectorAll(".tab-pane").forEach(pane => {
        pane.classList.remove("active");
    });

    // Show select tab pane
    const targetPane = document.getElementById(`tab-${tabId}`);
    if (targetPane) {
        targetPane.classList.add("active");
    }

    // Set page header title
    const translationKey = `menu_${tabId.replace("-", "_")}`;
    const pageTitleHeader = document.getElementById("pageTitle");
    if (pageTitleHeader && translations[currentLanguage][translationKey]) {
        pageTitleHeader.textContent = translations[currentLanguage][translationKey];
    }
}
window.switchTab = switchTab;

// Helper to toggle Custom Village inputs
function toggleCustomVillage(selectEl, wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    if (!selectEl || !wrapper) return;
    const val = selectEl.value;
    if (val === "other" || val.includes("ផ្សេងៗ") || val.includes("Others") || val.includes("other")) {
        wrapper.classList.remove("d-none");
        const input = wrapper.querySelector("input");
        if (input) input.required = true;
    } else {
        wrapper.classList.add("d-none");
        const input = wrapper.querySelector("input");
        if (input) {
            input.required = false;
            input.value = "";
        }
    }
}
window.toggleCustomVillage = toggleCustomVillage;

// Helper to toggle Collateral Inputs
function toggleCollateral(selectEl, wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    if (selectEl.value === "មាន") {
        wrapper.classList.remove("d-none");
        wrapper.querySelector("textarea").required = true;
    } else {
        wrapper.classList.add("d-none");
        wrapper.querySelector("textarea").required = false;
        wrapper.querySelector("textarea").value = "";
    }
}
window.toggleCollateral = toggleCollateral;

// Close modal helper
function closeModal(modalId) {
    document.getElementById(modalId).classList.add("d-none");
}
window.closeModal = closeModal;

// ==========================================================================
// REAL-TIME CLOUD SYNCHRONIZATION (FIREBASE DATABASE)
// ==========================================================================
let isSyncedFirstTime = false;
function triggerRealtimeSync() {
    // Cloud Connection Indicators
    const cloudStatusText = document.getElementById("cloudStatusText");
    const cloudIndicator = document.getElementById("cloudIndicator");
    const cloudDetailStatus = document.getElementById("cloudDetailStatus");
    
    function updateCloudStatus(isOnline) {
        if (isOnline) {
            if (cloudStatusText) cloudStatusText.innerHTML = '<span class="status-dot online"></span> Cloud Connected';
            if (cloudIndicator) {
                cloudIndicator.className = "cloud-indicator";
                cloudIndicator.querySelector(".cloud-text").textContent = translations[currentLanguage]["cloud_synced"];
            }
            if (cloudDetailStatus) {
                cloudDetailStatus.className = "config-value text-success";
                cloudDetailStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Connected';
            }
        } else {
            if (cloudStatusText) cloudStatusText.innerHTML = '<span class="status-dot offline"></span> Offline';
            if (cloudIndicator) {
                cloudIndicator.className = "cloud-indicator offline";
                cloudIndicator.querySelector(".cloud-text").textContent = currentLanguage === "km" ? "គ្មានអ៊ីនធឺណិត" : "Offline Mode";
            }
            if (cloudDetailStatus) {
                cloudDetailStatus.className = "config-value text-danger";
                cloudDetailStatus.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Disconnected';
            }
        }
    }

    // Monitor Firebase connection status using compat API
    db.ref(".info/connected").on("value", (snap) => {
        updateCloudStatus(snap.val() === true);
    });

    // Monitor Settings (like theme) using compat API
    db.ref("settings").on("value", (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            if (data.theme && data.theme !== currentTheme) {
                setTheme(data.theme);
            }
        }
    });

    // Sync Borrowers using compat API
    db.ref("borrowers").on("value", (snapshot) => {
        if (snapshot.exists()) {
            borrowersData = snapshot.val();
        } else {
            borrowersData = {};
        }
        
        // Refresh calculations and UI displays
        calculateTotalsAndDashboard();
        renderRecentBorrowersTable();
        renderBorrowersTableList();
        renderRepaymentsHistoryTable();
        generateNextCustomerId();
        
        isSyncedFirstTime = true;
    }, (error) => {
        console.error("Firebase read borrowers error: ", error);
        updateCloudStatus(false);
    });
}

// Generate sequential customer ID e.g. LMI-0001
function generateNextCustomerId() {
    const list = Object.values(borrowersData);
    let nextNum = 1;
    
    if (list.length > 0) {
        const numericIds = list.map(b => {
            const match = b.id ? b.id.match(/LMI-(\d+)/) : null;
            return match ? parseInt(match[1]) : 0;
        });
        const maxVal = Math.max(...numericIds, 0);
        nextNum = maxVal + 1;
    }
    
    const formattedId = "LMI-" + String(nextNum).padStart(4, "0");
    const addIdInput = document.getElementById("borrowerId");
    if (addIdInput) {
        addIdInput.value = formattedId;
    }
    return formattedId;
}

// ==========================================================================
// CALCULATE TOTALS AND RECENT ACTIVITIES
// ==========================================================================
function calculateTotalsAndDashboard() {
    const list = Object.values(borrowersData);
    
    let totalBorrowers = 0;
    let totalRiel = 0;
    let totalUSD = 0;
    
    list.forEach(b => {
        // Only active borrowers count towards total outstanding loan capitals
        if (b.status === "active") {
            totalBorrowers++;
            const amt = parseFloat(b.amount) || 0;
            if (b.currency === "KHR") {
                totalRiel += amt;
            } else {
                totalUSD += amt;
            }
        }
    });
    
    // Update Stats Display
    const statTotal = document.getElementById("statTotalBorrowers");
    const statRiel = document.getElementById("statTotalRiel");
    const statUSD = document.getElementById("statTotalUSD");
    
    if (statTotal) statTotal.textContent = `${totalBorrowers} ${currentLanguage === "km" ? "នាក់" : "Clients"}`;
    if (statRiel) statRiel.textContent = formatCurrency(totalRiel, "KHR");
    if (statUSD) statUSD.textContent = formatCurrency(totalUSD, "USD");
}

function formatCurrency(amount, currency) {
    if (currency === "KHR") {
        return new Intl.NumberFormat(currentLanguage === "km" ? "km-KH" : "en-US", { maximumFractionDigits: 0 }).format(amount) + " ៛";
    } else {
        return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
    }
}

// ==========================================================================
// RENDER DATA TABLES (DASHBOARD & FULL LIST)
// ==========================================================================
function renderRecentBorrowersTable() {
    const tbody = document.getElementById("recentBorrowersTable");
    if (!tbody) return;
    
    const list = Object.values(borrowersData);
    
    // Sort by createdAt timestamp in descending order (newest first)
    list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    
    // Take top 10
    const top10 = list.slice(0, 10);
    
    if (top10.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">${translations[currentLanguage]["no_data"]}</td></tr>`;
        return;
    }
    
    let html = "";
    top10.forEach(b => {
        const isKh = currentLanguage === "km";
        const statusBadge = b.status === "paid" 
            ? `<span class="badge badge-success"><span class="badge-dot"></span>${translations[currentLanguage]["paid_status"]}</span>`
            : `<span class="badge badge-warning"><span class="badge-dot"></span>${translations[currentLanguage]["active_status"]}</span>`;
            
        const formattedDate = formatDateString(b.date);
        const displayVillage = b.village === "other" ? (b.customVillage || (isKh ? "ផ្សេងៗ" : "Other")) : b.village;
        
        html += `
        <tr>
            <td data-label="${translations[currentLanguage]["tbl_id"]}" class="font-bold text-primary">${b.id || ""}</td>
            <td data-label="${translations[currentLanguage]["tbl_name"]}">${b.name || ""}</td>
            <td data-label="${translations[currentLanguage]["tbl_phone"]}">${b.phone || ""}</td>
            <td data-label="${translations[currentLanguage]["tbl_village"]}">${displayVillage}</td>
            <td data-label="${translations[currentLanguage]["tbl_amount"]}" class="font-bold">${formatCurrency(b.amount, b.currency)}</td>
            <td data-label="${translations[currentLanguage]["tbl_date"]}">${formattedDate}</td>
            <td data-label="${translations[currentLanguage]["tbl_status"]}">${statusBadge}</td>
        </tr>
        `;
    });
    
    tbody.innerHTML = html;
}

function renderBorrowersTableList() {
    const tbody = document.getElementById("borrowersTableBody");
    if (!tbody) return;
    
    const list = Object.entries(borrowersData); // array of [key, value]
    
    // Sort by date or ID descending
    list.sort((a, b) => (b[1].createdAt || 0) - (a[1].createdAt || 0));
    
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" class="text-center py-5 text-muted">${translations[currentLanguage]["no_data"]}</td></tr>`;
        return;
    }
    
    // Apply filters
    const searchVal = document.getElementById("searchBorrower").value.toLowerCase();
    const villageFilter = document.getElementById("filterVillage").value;
    
    let html = "";
    let matchesCount = 0;
    
    list.forEach(([key, b]) => {
        const name = (b.name || "").toLowerCase();
        const id = (b.id || "").toLowerCase();
        const phone = (b.phone || "").toLowerCase();
        const displayVillage = b.village === "other" ? (b.customVillage || "") : b.village;
        
        // Search filter matching
        const matchesSearch = name.includes(searchVal) || id.includes(searchVal) || phone.includes(searchVal);
        
        // Village filter matching
        let matchesVillage = true;
        if (villageFilter === "other") {
            matchesVillage = b.village === "other";
        } else if (villageFilter !== "") {
            matchesVillage = b.village === villageFilter;
        }
        
        if (matchesSearch && matchesVillage) {
            matchesCount++;
            const statusBadge = b.status === "paid" 
                ? `<span class="badge badge-success"><span class="badge-dot"></span>${translations[currentLanguage]["paid_status"]}</span>`
                : `<span class="badge badge-warning"><span class="badge-dot"></span>${translations[currentLanguage]["active_status"]}</span>`;
                
            const collateralText = b.hasCollateral === "មាន" 
                ? `<span class="text-success"><i class="fa-solid fa-circle-check"></i> ${b.collateral || translations[currentLanguage]["opt_yes"]}</span>`
                : `<span class="text-muted"><i class="fa-solid fa-circle-xmark"></i> ${translations[currentLanguage]["opt_no"]}</span>`;
                
            html += `
            <tr>
                <td data-label="${translations[currentLanguage]["tbl_id"]}" class="font-bold text-primary">${b.id || ""}</td>
                <td data-label="${translations[currentLanguage]["tbl_name"]}" class="font-medium">${b.name || ""}</td>
                <td data-label="${translations[currentLanguage]["tbl_phone"]}">${b.phone || ""}</td>
                <td data-label="${translations[currentLanguage]["tbl_village"]}">${displayVillage}</td>
                <td data-label="${translations[currentLanguage]["tbl_amount"]}" class="font-bold">${formatCurrency(b.amount, b.currency)}</td>
                <td data-label="${translations[currentLanguage]["tbl_interest_rate"]}">${b.interestRate}%</td>
                <td data-label="${translations[currentLanguage]["tbl_date"]}">${formatDateString(b.date)}</td>
                <td data-label="${translations[currentLanguage]["tbl_collateral"]}">${collateralText}</td>
                <td data-label="${translations[currentLanguage]["tbl_status"]}">${statusBadge}</td>
                <td class="no-label">
                    <div class="actions-cell">
                        ${b.status !== "paid" ? `
                            <button class="btn btn-icon-only btn-success" onclick="openRepaymentModal('${key}')" title="${translations[currentLanguage]["btn_pay"]}">
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                            </button>
                        ` : `
                            <button class="btn btn-icon-only btn-outline" disabled style="opacity: 0.4">
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                            </button>
                        `}
                        <button class="btn btn-icon-only btn-warning" onclick="openBorrowMoreModal('${key}')" title="${translations[currentLanguage]["btn_borrow_more"]}">
                            <i class="fa-solid fa-circle-plus"></i>
                        </button>
                        <button class="btn btn-icon-only btn-primary" onclick="openPrintModal('${key}')" title="${translations[currentLanguage]["btn_print"]}">
                            <i class="fa-solid fa-print"></i>
                        </button>
                        <button class="btn btn-icon-only btn-outline" onclick="openEditModal('${key}')" title="${translations[currentLanguage]["btn_edit"]}">
                            <i class="fa-solid fa-user-pen"></i>
                        </button>
                        <button class="btn btn-icon-only btn-outline text-danger" onclick="deleteBorrower('${key}')" title="${translations[currentLanguage]["btn_delete"]}">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
            `;
        }
    });
    
    if (matchesCount === 0) {
        tbody.innerHTML = `<tr><td colspan="10" class="text-center py-5 text-muted">${translations[currentLanguage]["no_data"]}</td></tr>`;
        return;
    }
    
    tbody.innerHTML = html;
}

function filterBorrowersList() {
    renderBorrowersTableList();
}
window.filterBorrowersList = filterBorrowersList;

function renderRepaymentsHistoryTable() {
    const tbody = document.getElementById("repaymentsHistoryTableBody");
    if (!tbody) return;
    
    let allPayments = [];
    Object.entries(borrowersData).forEach(([borrowerKey, b]) => {
        if (b.payments) {
            Object.entries(b.payments).forEach(([paymentKey, p]) => {
                allPayments.push({
                    borrowerKey,
                    borrowerId: b.id || "",
                    borrowerName: b.name || "",
                    borrowerPhone: b.phone || "",
                    village: b.village || "",
                    customVillage: b.customVillage || "",
                    currency: b.currency || "USD",
                    paymentKey,
                    amount: parseFloat(p.amount) || 0,
                    date: p.date || "",
                    type: p.type || "partial",
                    note: p.note || ""
                });
            });
        }
    });
    
    // Sort all payments by date descending (newest first)
    allPayments.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Filter controls values
    const searchVal = document.getElementById("searchRepayment") ? document.getElementById("searchRepayment").value.toLowerCase() : "";
    const villageFilter = document.getElementById("filterRepayVillage") ? document.getElementById("filterRepayVillage").value : "";
    const typeFilter = document.getElementById("filterRepayType") ? document.getElementById("filterRepayType").value : "";
    const currencyFilter = document.getElementById("filterRepayCurrency") ? document.getElementById("filterRepayCurrency").value : "";
    
    let html = "";
    let matchesCount = 0;
    
    allPayments.forEach(p => {
        const name = p.borrowerName.toLowerCase();
        const id = p.borrowerId.toLowerCase();
        const phone = p.borrowerPhone.toLowerCase();
        const note = p.note.toLowerCase();
        const displayVillage = p.village === "other" ? (p.customVillage || "") : p.village;
        
        // Search filter matching
        const matchesSearch = name.includes(searchVal) || id.includes(searchVal) || phone.includes(searchVal) || note.includes(searchVal);
        
        // Village filter matching
        let matchesVillage = true;
        if (villageFilter === "other") {
            matchesVillage = p.village === "other";
        } else if (villageFilter !== "") {
            matchesVillage = p.village === villageFilter;
        }
        
        // Type filter matching
        let matchesType = true;
        if (typeFilter !== "") {
            matchesType = p.type === typeFilter;
        }
        
        // Currency filter matching
        let matchesCurrency = true;
        if (currencyFilter !== "") {
            matchesCurrency = p.currency === currencyFilter;
        }
        
        if (matchesSearch && matchesVillage && matchesType && matchesCurrency) {
            matchesCount++;
            
            let typeText = "";
            if (p.type === "full") {
                typeText = `<span class="badge badge-success"><span class="badge-dot"></span>${translations[currentLanguage]["opt_repay_full"]}</span>`;
            } else if (p.type === "interest_only") {
                typeText = `<span class="badge badge-primary"><span class="badge-dot"></span>${translations[currentLanguage]["opt_repay_interest_only"]}</span>`;
            } else if (p.type === "borrow_more") {
                typeText = `<span class="badge badge-warning"><span class="badge-dot"></span>${translations[currentLanguage]["btn_borrow_more"]}</span>`;
            } else {
                typeText = `<span class="badge badge-warning"><span class="badge-dot"></span>${translations[currentLanguage]["opt_repay_interest_and_principal"]}</span>`;
            }
                
            html += `
            <tr>
                <td data-label="${translations[currentLanguage]["tbl_id"]}" class="font-bold text-primary">${p.borrowerId}</td>
                <td data-label="${translations[currentLanguage]["tbl_name"]}" class="font-medium">${p.borrowerName}</td>
                <td data-label="${translations[currentLanguage]["tbl_phone"]}">${p.borrowerPhone}</td>
                <td data-label="${translations[currentLanguage]["tbl_repay_date"]}">${formatDateString(p.date)}</td>
                <td data-label="${translations[currentLanguage]["tbl_repay_type"]}">${typeText}</td>
                <td data-label="${translations[currentLanguage]["tbl_repay_amount"]}" class="font-bold ${p.type === 'borrow_more' ? 'text-danger' : 'text-success'}">${p.type === 'borrow_more' ? '+' : '-'}${formatCurrency(p.amount, p.currency)}</td>
                <td data-label="${translations[currentLanguage]["tbl_note"]}">${p.note || ""}</td>
                <td class="no-label">
                    <div class="actions-cell">
                        <button class="btn btn-icon-only btn-primary" onclick="openPrintModal('${p.borrowerKey}')" title="${translations[currentLanguage]["btn_print"]}">
                            <i class="fa-solid fa-print"></i>
                        </button>
                        <button class="btn btn-icon-only btn-outline text-danger" onclick="deleteRepaymentRecord('${p.borrowerKey}', '${p.paymentKey}')" title="${translations[currentLanguage]["btn_delete"]}">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
            `;
        }
    });
    
    if (matchesCount === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-5 text-muted">${translations[currentLanguage]["no_data"]}</td></tr>`;
        return;
    }
    
    tbody.innerHTML = html;
}

function filterRepaymentsList() {
    renderRepaymentsHistoryTable();
}
window.filterRepaymentsList = filterRepaymentsList;
window.renderRepaymentsHistoryTable = renderRepaymentsHistoryTable;

function deleteRepaymentRecord(borrowerKey, paymentKey) {
    const b = borrowersData[borrowerKey];
    if (!b || !b.payments) return;
    
    const check = confirm(translations[currentLanguage]["confirm_delete_payment"]);
    if (check) {
        const payment = b.payments[paymentKey];
        if (!payment) return;
        
        let refundAmount = 0;
        if (payment.type !== "interest_only") {
            if (payment.type === "borrow_more") {
                refundAmount = -(parseFloat(payment.amount) || 0); // deleting a borrow_more decreases outstanding debt
            } else {
                refundAmount = parseFloat(payment.amount) || 0; // deleting a repayment increases outstanding debt
            }
        }
        
        // Clone and delete from the payments structure
        let newPayments = null;
        if (Array.isArray(b.payments)) {
            newPayments = [...b.payments];
            newPayments.splice(paymentKey, 1);
        } else {
            newPayments = {...b.payments};
            delete newPayments[paymentKey];
            // Convert to array to avoid empty slots if it was object-based
            newPayments = Object.values(newPayments);
        }
        
        const newAmount = Math.max(0, (b.amount || 0) + refundAmount);
        const newStatus = newAmount > 0 ? "active" : "paid";
        
        const updates = {
            amount: newAmount,
            status: newStatus,
            payments: newPayments
        };
        
        db.ref(`borrowers/${borrowerKey}`).update(updates)
            .then(() => {
                showToast(translations[currentLanguage]["msg_delete_payment_success"], "success");
            })
            .catch(err => {
                console.error("Error deleting repayment record:", err);
                showToast("Failed to delete repayment record!", "error");
            });
    }
}
window.deleteRepaymentRecord = deleteRepaymentRecord;

function formatDateString(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
        return `${parts[2]}-${parts[1]}-${parts[0]}`; // DD-MM-YYYY
    }
    return dateStr;
}

// ==========================================================================
// ADD BORROWER RECORD
// ==========================================================================
function saveNewBorrower(event) {
    event.preventDefault();
    
    const id = document.getElementById("borrowerId").value;
    const name = document.getElementById("borrowerName").value.trim();
    const phone = document.getElementById("borrowerPhone").value.trim();
    const village = document.getElementById("borrowerVillage").value;
    const customVillage = document.getElementById("borrowerCustomVillage").value.trim();
    const amount = parseFloat(document.getElementById("loanAmount").value) || 0;
    const currency = document.getElementById("loanCurrency").value;
    const interestRate = parseFloat(document.getElementById("interestRate").value) || 0;
    const date = document.getElementById("loanDate").value;
    const hasCollateral = document.getElementById("hasCollateral").value;
    const collateral = document.getElementById("collateralDetail").value.trim();
    
    const key = `borrower_${Date.now()}`;
    const newBorrower = {
        id,
        name,
        phone,
        village: (village === "other" || village.includes("ផ្សេងៗ") || village.includes("Others")) ? "other" : village,
        customVillage: (village === "other" || village.includes("ផ្សេងៗ") || village.includes("Others")) ? customVillage : "",
        amount,
        currency,
        interestRate,
        date,
        hasCollateral,
        collateral: hasCollateral === "មាន" ? collateral : "",
        status: "active",
        payments: [],
        createdAt: Date.now()
    };
    
    db.ref(`borrowers/${key}`).set(newBorrower)
        .then(() => {
            showToast(translations[currentLanguage]["msg_save_success"], "success");
            document.getElementById("addBorrowerForm").reset();
            
            // Set default date and interest, and reset calculations
            document.getElementById("interestRate").value = 10;
            setDefaultLoanDate();
            updateAddFormCalculations();
            
            // Re-toggle fields to update UI visibility
            toggleCustomVillage(document.getElementById("borrowerVillage"), "customVillageWrapper");
            toggleCollateral(document.getElementById("hasCollateral"), "collateralDetailWrapper");
            
            // Switch back to dashboard to view entry
            switchTab("dashboard");
        })
        .catch(err => {
            console.error("Firebase save new borrower error: ", err);
            showToast("Cloud saving failed!", "error");
        });
}
window.saveNewBorrower = saveNewBorrower;

// ==========================================================================
// EDIT BORROWER DETAILS
// ==========================================================================
function openEditModal(key) {
    const b = borrowersData[key];
    if (!b) return;
    
    document.getElementById("editKey").value = key;
    document.getElementById("editBorrowerId").value = b.id || "";
    document.getElementById("editBorrowerName").value = b.name || "";
    document.getElementById("editBorrowerPhone").value = b.phone || "";
    
    const selectVillage = document.getElementById("editBorrowerVillage");
    selectVillage.value = b.village || "";
    toggleCustomVillage(selectVillage, "editCustomVillageWrapper");
    document.getElementById("editBorrowerCustomVillage").value = b.customVillage || "";
    
    document.getElementById("editLoanAmount").value = b.amount || 0;
    document.getElementById("editLoanCurrency").value = b.currency || "USD";
    document.getElementById("editInterestRate").value = b.interestRate || 0;
    document.getElementById("editLoanDate").value = b.date || "";
    
    const selectCollateral = document.getElementById("editHasCollateral");
    selectCollateral.value = b.hasCollateral || "គ្មាន";
    toggleCollateral(selectCollateral, "editCollateralDetailWrapper");
    document.getElementById("editCollateralDetail").value = b.collateral || "";
    
    updateEditFormCalculations();
    document.getElementById("editBorrowerModal").classList.remove("d-none");
}
window.openEditModal = openEditModal;

function updateBorrower(event) {
    event.preventDefault();
    
    const key = document.getElementById("editKey").value;
    const name = document.getElementById("editBorrowerName").value.trim();
    const phone = document.getElementById("editBorrowerPhone").value.trim();
    const village = document.getElementById("editBorrowerVillage").value;
    const customVillage = document.getElementById("editCustomVillageWrapper").classList.contains("d-none") ? "" : document.getElementById("editBorrowerCustomVillage").value.trim();
    const amount = parseFloat(document.getElementById("editLoanAmount").value) || 0;
    const interestRate = parseFloat(document.getElementById("editInterestRate").value) || 0;
    const date = document.getElementById("editLoanDate").value;
    const hasCollateral = document.getElementById("editHasCollateral").value;
    const collateral = document.getElementById("editCollateralDetailWrapper").classList.contains("d-none") ? "" : document.getElementById("editCollateralDetail").value.trim();
    
    const status = amount <= 0 ? "paid" : "active";
    
    const updates = {
        name,
        phone,
        village: (village === "other" || village.includes("ផ្សេងៗ") || village.includes("Others")) ? "other" : village,
        customVillage: (village === "other" || village.includes("ផ្សេងៗ") || village.includes("Others")) ? customVillage : "",
        amount,
        interestRate,
        date,
        hasCollateral,
        collateral,
        status
    };
    
    db.ref(`borrowers/${key}`).update(updates)
        .then(() => {
            showToast(translations[currentLanguage]["msg_update_success"], "success");
            closeModal("editBorrowerModal");
        })
        .catch(err => {
            console.error("Firebase update borrower error: ", err);
            showToast("Update failed!", "error");
        });
}
window.updateBorrower = updateBorrower;

// ==========================================================================
// DELETE BORROWER
// ==========================================================================
function deleteBorrower(key) {
    const check = confirm(translations[currentLanguage]["confirm_delete"]);
    if (check) {
        db.ref(`borrowers/${key}`).remove()
            .then(() => {
                showToast(translations[currentLanguage]["msg_delete_success"], "success");
            })
            .catch(err => {
                console.error("Firebase delete borrower error: ", err);
                showToast("Deletion failed!", "error");
            });
    }
}
window.deleteBorrower = deleteBorrower;

// ==========================================================================
// REPAYMENT MANAGEMENT (FULL / PARTIAL)
// ==========================================================================
function openRepaymentModal(key) {
    const b = borrowersData[key];
    if (!b) return;
    
    document.getElementById("repayKey").value = key;
    document.getElementById("repayClientName").textContent = b.name || "";
    document.getElementById("repayClientId").textContent = `ID: ${b.id || ""}`;
    
    const currency = b.currency || "USD";
    document.getElementById("repayOutstandingAmount").textContent = formatCurrency(b.amount || 0, currency);
    document.getElementById("repayCurrencyLabel").textContent = currency;
    
    // Reset category dropdown to default
    document.getElementById("repayCategory").value = "interest_and_principal";
    document.getElementById("repayCategoryWrapper").classList.remove("d-none");
    
    // Set repayment amount default to empty
    document.getElementById("repayAmount").value = "";
    
    // Toggle radio buttons default
    document.querySelectorAll('input[name="repayType"]').forEach(radio => {
        if (radio.value === "partial") {
            radio.checked = true;
            radio.parentElement.classList.add("active");
        } else {
            radio.checked = false;
            radio.parentElement.classList.remove("active");
        }
    });

    // Default note
    document.getElementById("repayNote").value = "";
    
    // Set today as default date
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("repayDate").value = today;
    
    // Load repayment history logs
    renderRepaymentHistory(b);
    
    // Run calculations
    updateRepaymentCalculations();
    
    document.getElementById("repaymentModal").classList.remove("d-none");
}
window.openRepaymentModal = openRepaymentModal;

function updateRepaymentCalculations() {
    const key = document.getElementById("repayKey").value;
    const b = borrowersData[key];
    if (!b) return;

    const repayType = document.querySelector('input[name="repayType"]:checked').value;
    const category = document.getElementById("repayCategory").value;
    const amountInput = document.getElementById("repayAmount");
    const calcDetail = document.getElementById("repayCalculationDetail");
    
    const principal = parseFloat(b.amount) || 0;
    const rate = parseFloat(b.interestRate) || 0;
    const currency = b.currency || "USD";
    
    // Parse Dates
    const loanDateStr = b.date;
    const repayDateStr = document.getElementById("repayDate").value;
    
    let diffDays = 0;
    if (loanDateStr && repayDateStr) {
        const startDate = new Date(loanDateStr);
        const endDate = new Date(repayDateStr);
        startDate.setHours(0,0,0,0);
        endDate.setHours(0,0,0,0);
        const timeDiff = endDate - startDate;
        diffDays = Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
    }
    
    const durationInMonths = diffDays / 30;
    const totalInterest = (principal * rate / 100) * durationInMonths;
    const totalRepay = principal + totalInterest;

    // Display values in breakdown card
    const isKh = currentLanguage === "km";
    document.getElementById("calcDuration").textContent = `${diffDays} ${translations[currentLanguage]["lbl_days"]} (~${durationInMonths.toFixed(2)} ${translations[currentLanguage]["lbl_months"]})`;
    document.getElementById("calcPrincipal").textContent = formatCurrency(principal, currency);
    document.getElementById("calcInterestRate").textContent = `${rate}%`;
    document.getElementById("calcTotalInterest").textContent = formatCurrency(totalInterest, currency);
    document.getElementById("calcTotalRepay").textContent = formatCurrency(totalRepay, currency);
    
    if (repayType === "full") {
        amountInput.value = totalRepay.toFixed(2).replace(/\.00$/, "");
        amountInput.readOnly = true;
        calcDetail.classList.remove("d-none");
        document.getElementById("repayNote").value = isKh ? "សងផ្ដាច់ទាំងអស់" : "Settled full balance";
    } else {
        amountInput.readOnly = false;
        calcDetail.classList.add("d-none");
        
        if (category === "interest_only") {
            const monthlyInterest = (principal * rate) / 100;
            const interestValue = totalInterest > 0 ? totalInterest : monthlyInterest;
            amountInput.value = interestValue.toFixed(2).replace(/\.00$/, "");
            document.getElementById("repayNote").value = isKh ? "សងតែការប្រាក់" : "Paid interest only";
        } else {
            const currentNote = document.getElementById("repayNote").value;
            if (currentNote === (isKh ? "សងតែការប្រាក់" : "Paid interest only") || currentNote === (isKh ? "សងផ្ដាច់ទាំងអស់" : "Settled full balance")) {
                document.getElementById("repayNote").value = "";
            }
        }
    }
    validateRepayAmount();
}
window.updateRepaymentCalculations = updateRepaymentCalculations;

function toggleRepayType(type) {
    const key = document.getElementById("repayKey").value;
    const b = borrowersData[key];
    if (!b) return;
    
    const categoryWrapper = document.getElementById("repayCategoryWrapper");
    
    // Highlight labels
    document.querySelectorAll('input[name="repayType"]').forEach(radio => {
        if (radio.value === type) {
            radio.parentElement.classList.add("active");
        } else {
            radio.parentElement.classList.remove("active");
        }
    });

    if (type === "full") {
        if (categoryWrapper) categoryWrapper.classList.add("d-none");
    } else {
        if (categoryWrapper) {
            categoryWrapper.classList.remove("d-none");
            document.getElementById("repayCategory").value = "interest_and_principal";
        }
        document.getElementById("repayAmount").value = "";
    }
    updateRepaymentCalculations();
}
window.toggleRepayType = toggleRepayType;

function onChangeRepayCategory() {
    updateRepaymentCalculations();
}
window.onChangeRepayCategory = onChangeRepayCategory;

function validateRepayAmount() {
    const key = document.getElementById("repayKey").value;
    const b = borrowersData[key];
    if (!b) return;
    
    const category = document.getElementById("repayCategory").value;
    const amountInput = document.getElementById("repayAmount");
    const val = parseFloat(amountInput.value) || 0;
    
    if (category === "interest_only") {
        amountInput.classList.remove("text-danger");
    } else {
        if (val > b.amount) {
            amountInput.classList.add("text-danger");
            showToast(translations[currentLanguage]["msg_repay_limit"], "warning");
        } else {
            amountInput.classList.remove("text-danger");
        }
    }
}
window.validateRepayAmount = validateRepayAmount;

function submitRepayment(event) {
    event.preventDefault();
    
    const key = document.getElementById("repayKey").value;
    const b = borrowersData[key];
    if (!b) return;
    
    const repayAmount = parseFloat(document.getElementById("repayAmount").value) || 0;
    const date = document.getElementById("repayDate").value;
    const note = document.getElementById("repayNote").value.trim();
    const type = document.querySelector('input[name="repayType"]:checked').value;
    const category = document.getElementById("repayCategory").value;
    
    if (repayAmount <= 0) return;
    
    if (type !== "full" && category !== "interest_only" && repayAmount > b.amount) {
        showToast(translations[currentLanguage]["msg_repay_limit"], "error");
        return;
    }
    
    // If interest_only, outstanding debt remains unchanged
    const newOutstanding = (type !== "full" && category === "interest_only") ? b.amount : Math.max(0, b.amount - repayAmount);
    const status = newOutstanding <= 0.01 ? "paid" : "active";
    
    // Log details of this repayment
    let finalNote = note;
    if (!finalNote) {
        if (type === "full") {
            finalNote = currentLanguage === "km" ? "សងផ្ដាច់ទាំងអស់" : "Settled Full";
        } else if (category === "interest_only") {
            finalNote = currentLanguage === "km" ? "សងតែការប្រាក់" : "Paid Interest Only";
        } else {
            finalNote = currentLanguage === "km" ? "សងការប្រាក់និងប្រាក់ដើមខ្លះ" : "Interest & Partial Principal";
        }
    }
    
    const paymentRecord = {
        amount: repayAmount,
        date,
        type: type === "full" ? "full" : (category === "interest_only" ? "interest_only" : "partial"),
        note: finalNote
    };
    
    // Clone previous payments list or create a new one
    const paymentsList = b.payments ? [...Object.values(b.payments)] : [];
    paymentsList.push(paymentRecord);
    
    const updates = {
        amount: newOutstanding,
        status,
        payments: paymentsList
    };
    
    db.ref(`borrowers/${key}`).update(updates)
        .then(() => {
            showToast(translations[currentLanguage]["msg_repay_success"], "success");
            closeModal("repaymentModal");
        })
        .catch(err => {
            console.error("Firebase write repayment error: ", err);
            showToast("Repayment logging failed!", "error");
        });
}
window.submitRepayment = submitRepayment;

function renderRepaymentHistory(borrower) {
    const tbody = document.getElementById("repayHistoryTableBody");
    if (!tbody) return;
    
    const payments = borrower.payments ? Object.values(borrower.payments) : [];
    
    if (payments.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted">${translations[currentLanguage]["no_history"]}</td></tr>`;
        return;
    }
    
    // Sort newest payment logs first
    payments.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let html = "";
    payments.forEach(p => {
        let typeText = "";
        if (p.type === "full") {
            typeText = `<span class="text-success font-bold">${translations[currentLanguage]["opt_repay_full"]}</span>`;
        } else if (p.type === "interest_only") {
            typeText = `<span class="text-primary font-bold">${translations[currentLanguage]["opt_repay_interest_only"]}</span>`;
        } else if (p.type === "borrow_more") {
            typeText = `<span class="text-warning font-bold">${translations[currentLanguage]["btn_borrow_more"]}</span>`;
        } else {
            typeText = `<span>${translations[currentLanguage]["opt_repay_interest_and_principal"]}</span>`;
        }
            
        html += `
        <tr>
            <td data-label="${translations[currentLanguage]["tbl_date"]}">${formatDateString(p.date)}</td>
            <td data-label="${translations[currentLanguage]["tbl_type"]}">${typeText}</td>
            <td data-label="${translations[currentLanguage]["tbl_repay_amount"]}" class="font-bold ${p.type === 'borrow_more' ? 'text-danger' : 'text-success'}">${p.type === 'borrow_more' ? '+' : '-'}${formatCurrency(p.amount, borrower.currency)}</td>
            <td data-label="${translations[currentLanguage]["tbl_note"]}">${p.note || ""}</td>
        </tr>
        `;
    });
    tbody.innerHTML = html;
}

// ==========================================================================
// PRINT ENGINE (RECEIPT PREVIEW & BROWSER PRINTER)
// ==========================================================================
function openPrintModal(key) {
    activePrintKey = key;
    const b = borrowersData[key];
    if (!b) return;
    
    document.getElementById("pReceiptId").textContent = b.id || "";
    document.getElementById("pReceiptName").textContent = b.name || "";
    document.getElementById("pReceiptPhone").textContent = b.phone || "";
    
    const displayVillage = b.village === "other" ? (b.customVillage || "") : b.village;
    document.getElementById("pReceiptVillage").textContent = displayVillage;
    document.getElementById("pReceiptDate").textContent = formatDateString(b.date);
    
    const collateralText = b.hasCollateral === "មាន" 
        ? `${translations[currentLanguage]["opt_yes"]} (${b.collateral || ""})`
        : translations[currentLanguage]["opt_no"];
    document.getElementById("pReceiptCollateral").textContent = collateralText;
    
    // Calculate Monthly Interest Payment
    const principal = parseFloat(b.amount) || 0;
    const rate = parseFloat(b.interestRate) || 0;
    const monthlyInterest = (principal * rate) / 100;
    
    document.getElementById("pReceiptCapital").textContent = formatCurrency(principal, b.currency);
    document.getElementById("pReceiptRate").textContent = `${rate}% / ${currentLanguage === "km" ? "ខែ" : "Month"}`;
    document.getElementById("pReceiptInterestAmount").textContent = `${formatCurrency(monthlyInterest, b.currency)} / ${currentLanguage === "km" ? "ខែ" : "Month"}`;
    
    // Load repayment logs into receipt
    const pHistorySection = document.getElementById("pReceiptHistorySection");
    const pRepayList = document.getElementById("pReceiptRepaymentList");
    const payments = b.payments ? Object.values(b.payments) : [];
    
    if (payments.length > 0) {
        pHistorySection.classList.remove("d-none");
        let repayHtml = "";
        payments.forEach(p => {
            let paymentTypeName = "";
            if (p.type === "full") {
                paymentTypeName = currentLanguage === "km" ? "សងផ្ដាច់" : "Full";
            } else if (p.type === "interest_only") {
                paymentTypeName = currentLanguage === "km" ? "សងការប្រាក់" : "Interest";
            } else if (p.type === "borrow_more") {
                paymentTypeName = currentLanguage === "km" ? "ខ្ចីថែម" : "Borrow More";
            } else {
                paymentTypeName = currentLanguage === "km" ? "សងខ្លះ" : "Part";
            }
            const isBorrowMore = p.type === "borrow_more";
            repayHtml += `
            <div class="receipt-repay-item ${isBorrowMore ? 'text-danger' : ''}">
                <span>${formatDateString(p.date)} (${paymentTypeName})</span>
                <span class="font-bold">${isBorrowMore ? '+' : '-'}${formatCurrency(p.amount, b.currency)}</span>
            </div>
            `;
        });
        pRepayList.innerHTML = repayHtml;
    } else {
        pHistorySection.classList.add("d-none");
        pRepayList.innerHTML = "";
    }
    
    document.getElementById("printReceiptModal").classList.remove("d-none");
}
window.openPrintModal = openPrintModal;

function printReceipt() {
    window.print();
}
window.printReceipt = printReceipt;

function shareReceiptText(key) {
    const b = borrowersData[key];
    if (!b) return "";
    
    const isKh = currentLanguage === "km";
    const displayVillage = b.village === "other" ? (b.customVillage || "") : b.village;
    const principal = parseFloat(b.amount) || 0;
    const rate = parseFloat(b.interestRate) || 0;
    const monthlyInterest = (principal * rate) / 100;
    
    let text = isKh 
        ? `📝 វិក្កយបត្រព័ត៌មានឥណទាន (LMI)\n`
        : `📝 Loan Information Statement (LMI)\n`;
    text += `----------------------------------\n`;
    text += `${isKh ? '🆔 លេខសម្គាល់៖' : '🆔 ID:'} ${b.id || ""}\n`;
    text += `${isKh ? '👤 ឈ្មោះអតិថិជន៖' : '👤 Customer Name:'} ${b.name || ""}\n`;
    text += `${isKh ? '📞 លេខទូរសព្ទ៖' : '📞 Phone:'} ${b.phone || ""}\n`;
    text += `${isKh ? '📍 អាសយដ្ឋានភូមិ៖' : '📍 Village:'} ${displayVillage}\n`;
    text += `${isKh ? '📅 ថ្ងៃចងការ៖' : '📅 Date:'} ${formatDateString(b.date)}\n`;
    text += `----------------------------------\n`;
    text += `${isKh ? '💰 ប្រាក់ចងការ៖' : '💰 Capital:'} ${formatCurrency(principal, b.currency)}\n`;
    text += `${isKh ? '📈 ការប្រាក់ក្នុង១ខែ៖' : '📈 Rate:'} ${rate}%\n`;
    text += `${isKh ? '💵 ការប្រាក់ត្រូវបង់៖' : '💵 Interest Amount:'} ${formatCurrency(monthlyInterest, b.currency)} / ${isKh ? 'ខែ' : 'Month'}\n`;
    text += `----------------------------------\n`;
    text += isKh ? `🙏 សូមអរគុណចំពោះការប្រើប្រាស់សេវាកម្មរបស់យើងខ្ញុំ!` : `🙏 Thank you for using our services!`;
    
    return text;
}

function shareReceipt() {
    if (!activePrintKey) return;
    const text = shareReceiptText(activePrintKey);
    const isKh = currentLanguage === "km";
    
    if (navigator.share) {
        navigator.share({
            title: isKh ? 'វិក្កយបត្រព័ត៌មានឥណទាន (LMI)' : 'Loan Information Statement (LMI)',
            text: text
        }).catch(err => {
            console.error("Error sharing:", err);
        });
    } else {
        // Fallback to copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            showToast(isKh ? "បានចម្លងអត្ថបទវិក្កយបត្រទៅ Clipboard!" : "Receipt text copied to clipboard!", "success");
        }).catch(err => {
            console.error("Clipboard copy failed:", err);
            showToast("Failed to copy receipt text!", "error");
        });
    }
}
window.shareReceipt = shareReceipt;

// ==========================================================================
// IMPORT & EXPORT CSV BACKUP
// ==========================================================================
function exportDataToCSV() {
    const list = Object.values(borrowersData);
    if (list.length === 0) {
        showToast("No data to export!", "warning");
        return;
    }
    
    // Define headers
    const headers = ["ID", "Name", "Phone", "Village", "CustomVillage", "Amount", "Currency", "InterestRate%", "LoanDate", "CollateralOption", "CollateralDetail", "Status", "CreatedAt"];
    
    let csvRows = [];
    csvRows.push(headers.join(","));
    
    list.forEach(b => {
        const row = [
            `"${(b.id || "").replace(/"/g, '""')}"`,
            `"${(b.name || "").replace(/"/g, '""')}"`,
            `"${(b.phone || "").replace(/"/g, '""')}"`,
            `"${(b.village || "").replace(/"/g, '""')}"`,
            `"${(b.customVillage || "").replace(/"/g, '""')}"`,
            b.amount || 0,
            `"${b.currency || "USD"}"`,
            b.interestRate || 0,
            `"${b.date || ""}"`,
            `"${(b.hasCollateral || "គ្មាន").replace(/"/g, '""')}"`,
            `"${(b.collateral || "").replace(/"/g, '""')}"`,
            `"${b.status || "active"}"`,
            b.createdAt || Date.now()
        ];
        csvRows.push(row.join(","));
    });
    
    const csvContent = "\uFEFF" + csvRows.join("\n"); // Add UTF-8 BOM for Khmer fonts in Excel
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.setAttribute("href", url);
    const dateStr = new Date().toISOString().split("T")[0];
    link.setAttribute("download", `LMI_Borrowers_Backup_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
window.exportDataToCSV = exportDataToCSV;

function importDataFromCSV(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        const rows = parseCSVText(text);
        
        if (rows.length < 2) {
            showToast(translations[currentLanguage]["msg_invalid_csv"], "error");
            return;
        }
        
        // Simple validation of headers
        const headers = rows[0].map(h => h.trim().toLowerCase());
        if (!headers.includes("id") || !headers.includes("name") || !headers.includes("amount")) {
            showToast(translations[currentLanguage]["msg_invalid_csv"], "error");
            return;
        }
        
        // Find indexes
        const idxId = headers.indexOf("id");
        const idxName = headers.indexOf("name");
        const idxPhone = headers.indexOf("phone");
        const idxVillage = headers.indexOf("village");
        const idxCustomVillage = headers.indexOf("customvillage");
        const idxAmount = headers.indexOf("amount");
        const idxCurrency = headers.indexOf("currency");
        const idxInterest = headers.indexOf("interestrate%");
        const idxDate = headers.indexOf("loandate");
        const idxCollateralOption = headers.indexOf("collateraloption");
        const idxCollateralDetail = headers.indexOf("collateraldetail");
        const idxStatus = headers.indexOf("status");
        const idxCreatedAt = headers.indexOf("createdat");
        
        let importCount = 0;
        let batchUpdates = {};
        
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            if (row.length < 3 || !row[idxName]) continue;
            
            const clientName = row[idxName].trim();
            if (!clientName) continue;
            
            const key = `borrower_${Date.now()}_${i}`;
            const clientAmount = parseFloat(row[idxAmount]) || 0;
            
            batchUpdates[key] = {
                id: row[idxId] || `LMI-${String(i).padStart(4, "0")}`,
                name: clientName,
                phone: row[idxPhone] || "",
                village: row[idxVillage] || "ព្រៃម្នាស់",
                customVillage: row[idxCustomVillage] || "",
                amount: clientAmount,
                currency: row[idxCurrency] || "USD",
                interestRate: parseFloat(row[idxInterest]) || 5,
                date: row[idxDate] || new Date().toISOString().split("T")[0],
                hasCollateral: row[idxCollateralOption] || "គ្មាន",
                collateral: row[idxCollateralDetail] || "",
                status: row[idxStatus] || (clientAmount <= 0 ? "paid" : "active"),
                createdAt: parseInt(row[idxCreatedAt]) || Date.now()
            };
            importCount++;
        }
        
        if (importCount > 0) {
            db.ref("borrowers").update(batchUpdates)
                .then(() => {
                    showToast(`${translations[currentLanguage]["msg_import_success"]} (${importCount})`, "success");
                    document.getElementById("csvFileInput").value = ""; // Reset file selection
                })
                .catch(err => {
                    console.error("Firebase CSV import error: ", err);
                    showToast("Cloud sync of CSV data failed!", "error");
                });
        } else {
            showToast("No valid rows found in CSV!", "warning");
        }
    };
    reader.readAsText(file);
}
window.importDataFromCSV = importDataFromCSV;

// Robust CSV parser to handle quotes and newlines in cells
function parseCSVText(text) {
    let lines = [];
    let row = [""];
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        let next = text[i+1];

        if (c === '"') {
            if (inQuotes && next === '"') {
                row[row.length - 1] += '"'; // Double quotes inside quotes
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (c === ',') {
            if (inQuotes) {
                row[row.length - 1] += c;
            } else {
                row.push("");
            }
        } else if (c === '\r' || c === '\n') {
            if (inQuotes) {
                row[row.length - 1] += c;
            } else {
                if (c === '\r' && next === '\n') {
                    i++;
                }
                lines.push(row);
                row = [""];
            }
        } else {
            row[row.length - 1] += c;
        }
    }
    if (row.length > 1 || row[0] !== "") {
        lines.push(row);
    }
    return lines;
}

// ==========================================================================
// DYNAMIC INTEREST AND REPAYMENT CALCULATOR
// ==========================================================================
function formatCalculatedNumber(amount, currency) {
    if (currency === "KHR") {
        return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(amount);
    } else {
        return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
    }
}

function updateAddFormCalculations() {
    const amount = parseFloat(document.getElementById("loanAmount").value) || 0;
    const rate = parseFloat(document.getElementById("interestRate").value) || 0;
    const currency = document.getElementById("loanCurrency").value;
    
    const interest = (amount * rate) / 100;
    const total = amount + interest;
    
    const totalInterestCurrency = document.getElementById("totalInterestCurrency");
    const totalRepayCurrency = document.getElementById("totalRepayCurrency");
    if (totalInterestCurrency) totalInterestCurrency.textContent = currency;
    if (totalRepayCurrency) totalRepayCurrency.textContent = currency;
    
    const totalInterestInput = document.getElementById("totalInterest");
    const totalRepayInput = document.getElementById("totalRepay");
    
    if (totalInterestInput) {
        totalInterestInput.value = formatCalculatedNumber(interest, currency);
    }
    if (totalRepayInput) {
        totalRepayInput.value = formatCalculatedNumber(total, currency);
    }
}
window.updateAddFormCalculations = updateAddFormCalculations;

function updateEditFormCalculations() {
    const amount = parseFloat(document.getElementById("editLoanAmount").value) || 0;
    const rate = parseFloat(document.getElementById("editInterestRate").value) || 0;
    const currency = document.getElementById("editLoanCurrency").value || "USD";
    
    const interest = (amount * rate) / 100;
    const total = amount + interest;
    
    const editTotalInterestCurrency = document.getElementById("editTotalInterestCurrency");
    const editTotalRepayCurrency = document.getElementById("editTotalRepayCurrency");
    if (editTotalInterestCurrency) editTotalInterestCurrency.textContent = currency;
    if (editTotalRepayCurrency) editTotalRepayCurrency.textContent = currency;
    
    const editTotalInterestInput = document.getElementById("editTotalInterest");
    const editTotalRepayInput = document.getElementById("editTotalRepay");
    
    if (editTotalInterestInput) {
        editTotalInterestInput.value = formatCalculatedNumber(interest, currency);
    }
    if (editTotalRepayInput) {
        editTotalRepayInput.value = formatCalculatedNumber(total, currency);
    }
}
window.updateEditFormCalculations = updateEditFormCalculations;

function setDefaultLoanDate() {
    const loanDateInput = document.getElementById("loanDate");
    if (loanDateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        loanDateInput.value = `${yyyy}-${mm}-${dd}`;
    }
}
window.setDefaultLoanDate = setDefaultLoanDate;

function handleLogin(event) {
    event.preventDefault();
    const passwordInput = document.getElementById("loginPassword");
    const errorMsg = document.getElementById("loginErrorMsg");
    const password = passwordInput.value;
    
    if (password === "123") {
        sessionStorage.setItem("lmi_authenticated", "true");
        
        // Hide Login Screen, Show App
        document.getElementById("loginScreen").classList.add("d-none");
        document.getElementById("appContainer").classList.remove("d-none");
        
        // Trigger firebase sync
        triggerRealtimeSync();
        
        // Start inactivity timer
        resetInactivityTimer();
        
        // Focus search box or other input as convenience
        const searchInput = document.getElementById("searchBorrower");
        if (searchInput) searchInput.focus();
    } else {
        errorMsg.classList.remove("d-none");
        passwordInput.classList.add("text-danger");
        passwordInput.focus();
        passwordInput.select();
    }
}
window.handleLogin = handleLogin;

function handleLogout() {
    sessionStorage.removeItem("lmi_authenticated");
    if (inactivityTimeout) clearTimeout(inactivityTimeout);
    
    // Clear password input
    const passwordInput = document.getElementById("loginPassword");
    if (passwordInput) {
        passwordInput.value = "";
        passwordInput.classList.remove("text-danger");
    }
    const errorMsg = document.getElementById("loginErrorMsg");
    if (errorMsg) errorMsg.classList.add("d-none");
    
    // Hide App, Show Login
    document.getElementById("appContainer").classList.add("d-none");
    document.getElementById("loginScreen").classList.remove("d-none");
    
    // Disconnect Firebase listeners
    db.ref("borrowers").off();
    db.ref("settings").off();
    db.ref(".info/connected").off();
    
    if (passwordInput) {
        setTimeout(() => passwordInput.focus(), 100);
    }
}
window.handleLogout = handleLogout;

function resetInactivityTimer() {
    if (inactivityTimeout) clearTimeout(inactivityTimeout);
    
    if (sessionStorage.getItem("lmi_authenticated") === "true") {
        inactivityTimeout = setTimeout(() => {
            handleLogout();
            showToast(currentLanguage === "km" ? "ប្រព័ន្ធត្រូវបានចាកចេញដោយស្វ័យប្រវត្ត ដោយសារមិនមានសកម្មភាពក្នុងរយៈពេល ២នាទី!" : "Logged out automatically due to 2 minutes of inactivity!", "warning");
        }, 120000); // 2 minutes = 120000ms
    }
}
window.resetInactivityTimer = resetInactivityTimer;

function toggleLoginPasswordVisibility() {
    const passwordInput = document.getElementById("loginPassword");
    const toggleIcon = document.getElementById("togglePasswordIcon");
    if (!passwordInput || !toggleIcon) return;
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.className = "fa-solid fa-eye-slash";
    } else {
        passwordInput.type = "password";
        toggleIcon.className = "fa-solid fa-eye";
    }
}
window.toggleLoginPasswordVisibility = toggleLoginPasswordVisibility;

// ==========================================================================
// BORROW MORE MANAGEMENT
// ==========================================================================
function openBorrowMoreModal(key) {
    const b = borrowersData[key];
    if (!b) return;
    
    document.getElementById("borrowMoreKey").value = key;
    document.getElementById("borrowMoreClientName").textContent = b.name || "";
    document.getElementById("borrowMoreClientId").textContent = `ID: ${b.id || ""}`;
    
    const currency = b.currency || "USD";
    document.getElementById("borrowMoreOutstandingAmount").textContent = formatCurrency(b.amount || 0, currency);
    document.getElementById("borrowMoreCurrencyLabel").textContent = currency;
    document.getElementById("borrowMoreNewTotalCurrencyLabel").textContent = currency;
    
    // Set interest rate from current value
    document.getElementById("borrowMoreInterestRate").value = b.interestRate || 0;
    
    // Reset amount
    document.getElementById("borrowMoreAmount").value = "";
    document.getElementById("borrowMoreNewTotal").value = formatCurrency(b.amount || 0, currency);
    
    // Default date is today
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("borrowMoreDate").value = today;
    
    // Note default
    document.getElementById("borrowMoreNote").value = "";
    
    document.getElementById("borrowMoreModal").classList.remove("d-none");
}
window.openBorrowMoreModal = openBorrowMoreModal;

function updateBorrowMoreCalculations() {
    const key = document.getElementById("borrowMoreKey").value;
    const b = borrowersData[key];
    if (!b) return;
    
    const additionalAmount = parseFloat(document.getElementById("borrowMoreAmount").value) || 0;
    const currentAmount = parseFloat(b.amount) || 0;
    const newTotal = currentAmount + additionalAmount;
    
    document.getElementById("borrowMoreNewTotal").value = formatCurrency(newTotal, b.currency || "USD");
}
window.updateBorrowMoreCalculations = updateBorrowMoreCalculations;

function submitBorrowMore(event) {
    event.preventDefault();
    
    const key = document.getElementById("borrowMoreKey").value;
    const b = borrowersData[key];
    if (!b) return;
    
    const borrowMoreAmount = parseFloat(document.getElementById("borrowMoreAmount").value) || 0;
    const date = document.getElementById("borrowMoreDate").value;
    const note = document.getElementById("borrowMoreNote").value.trim();
    
    if (borrowMoreAmount <= 0) return;
    
    const newOutstanding = b.amount + borrowMoreAmount;
    const status = "active"; // borrowing more always makes it active
    
    // Log details of this borrowing
    let finalNote = note;
    if (!finalNote) {
        finalNote = currentLanguage === "km" ? "ខ្ចីបន្ថែម" : "Borrowed More";
    }
    
    const paymentRecord = {
        amount: borrowMoreAmount,
        date,
        type: "borrow_more",
        note: finalNote
    };
    
    // Clone previous payments list or create a new one
    const paymentsList = b.payments ? [...Object.values(b.payments)] : [];
    paymentsList.push(paymentRecord);
    
    const updates = {
        amount: newOutstanding,
        date, // Update the principal loan date to the new borrowing date as requested
        status,
        payments: paymentsList
    };
    
    db.ref(`borrowers/${key}`).update(updates)
        .then(() => {
            showToast(translations[currentLanguage]["msg_borrow_more_success"], "success");
            closeModal("borrowMoreModal");
        })
        .catch(err => {
            console.error("Firebase write borrow more error: ", err);
            showToast("Borrowing logging failed!", "error");
        });
}
window.submitBorrowMore = submitBorrowMore;

document.addEventListener("DOMContentLoaded", () => {
    // Initialise Theme and Language from Local Storage directly
    changeLanguage(currentLanguage);
    setTheme(currentTheme);
    
    // Check authentication
    const isAuthenticated = sessionStorage.getItem("lmi_authenticated") === "true";
    const loginScreen = document.getElementById("loginScreen");
    const appContainer = document.getElementById("appContainer");
    
    if (isAuthenticated) {
        if (loginScreen) loginScreen.classList.add("d-none");
        if (appContainer) appContainer.classList.remove("d-none");
        triggerRealtimeSync();
    } else {
        if (loginScreen) loginScreen.classList.remove("d-none");
        if (appContainer) appContainer.classList.add("d-none");
        const passwordInput = document.getElementById("loginPassword");
        if (passwordInput) {
            setTimeout(() => passwordInput.focus(), 100);
        }
    }

    // Set inactivity listeners globally
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll', 'click'];
    events.forEach(event => {
        document.addEventListener(event, resetInactivityTimer);
    });
    resetInactivityTimer();

    // Set today's date as default loan date
    setDefaultLoanDate();

    // Setup dynamic interest calculations on the Add form
    const loanAmountEl = document.getElementById("loanAmount");
    const interestRateEl = document.getElementById("interestRate");
    const loanCurrencyEl = document.getElementById("loanCurrency");
    
    if (loanAmountEl) {
        loanAmountEl.addEventListener("input", updateAddFormCalculations);
    }
    if (interestRateEl) {
        interestRateEl.addEventListener("input", updateAddFormCalculations);
    }
    if (loanCurrencyEl) {
        loanCurrencyEl.addEventListener("change", updateAddFormCalculations);
    }
    
    // Setup dynamic interest calculations on the Edit form
    const editLoanAmountEl = document.getElementById("editLoanAmount");
    const editInterestRateEl = document.getElementById("editInterestRate");
    
    if (editLoanAmountEl) {
        editLoanAmountEl.addEventListener("input", updateEditFormCalculations);
    }
    if (editInterestRateEl) {
        editInterestRateEl.addEventListener("input", updateEditFormCalculations);
    }
    
    // Clear error style on typing in login
    const loginPasswordEl = document.getElementById("loginPassword");
    if (loginPasswordEl) {
        loginPasswordEl.addEventListener("input", () => {
            loginPasswordEl.classList.remove("text-danger");
            const errorMsg = document.getElementById("loginErrorMsg");
            if (errorMsg) errorMsg.classList.add("d-none");
        });
    }

    // Initialize draggable bottom sheets for mobile modals
    initDraggableBottomSheets();
});

// ==========================================================================
// DRAGGABLE BOTTOM SHEET FOR MOBILE MODALS
// ==========================================================================
function initDraggableBottomSheets() {
    const modals = document.querySelectorAll('.modal-card');
    
    modals.forEach(card => {
        let startY = 0;
        let currentY = 0;
        let isDragging = false;
        const modalContainer = card.parentElement; // .modal-container
        const body = card.querySelector('.modal-body') || card.querySelector('.receipt-preview-body');
        
        const onTouchStart = (e) => {
            if (window.innerWidth > 768) return;
            
            // Ignore if targeting interactive elements
            if (e.target.closest('input, select, textarea, button, a, .radio-box')) return;
            
            const isAtTop = body ? body.scrollTop === 0 : true;
            
            // Drag starts on header or if the body is scrolled to the top
            if (e.target.closest('.modal-header') || isAtTop) {
                startY = e.touches[0].clientY;
                isDragging = true;
                card.style.transition = 'none';
            }
        };
        
        const onTouchMove = (e) => {
            if (!isDragging) return;
            
            const deltaY = e.touches[0].clientY - startY;
            if (deltaY > 0) {
                if (e.cancelable) e.preventDefault();
                card.style.transform = `translateY(${deltaY}px)`;
                currentY = deltaY;
            } else {
                card.style.transform = '';
                currentY = 0;
            }
        };
        
        const onTouchEnd = () => {
            if (!isDragging) return;
            isDragging = false;
            
            card.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            
            if (currentY > 120) {
                const modalId = modalContainer.id;
                if (modalId) {
                    closeModal(modalId);
                }
                setTimeout(() => {
                    card.style.transform = '';
                }, 300);
            } else {
                card.style.transform = '';
            }
            currentY = 0;
        };
        
        card.addEventListener('touchstart', onTouchStart, { passive: true });
        card.addEventListener('touchmove', onTouchMove, { passive: false });
        card.addEventListener('touchend', onTouchEnd, { passive: true });
    });
}
