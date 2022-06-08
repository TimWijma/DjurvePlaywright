const Global = {
    url: "http://localhost:1500/?autotest=true"
    // url: "http://localhost:1500/"
}

const Defaults = {
    'button_Login': 'xpath=id("authenticate")',
    'div_Toastr': 'xpath=id("toast-container")',
    'input_password': 'xpath=id("password")',
    'input_username': 'xpath=id("username")',
    'span_Demo': 'xpath=id("title")',
    'Title': 'xpath=//h2'
}

const Acties = {
    Acties: {
        'a_Announcement': 'xpath=id("actionannouncement")/div[@class="mdl-card__actions mdl-card--border"]/a[@class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]',
        'a_Complaint': 'xpath=id("actioncomplaint")/div[@class="mdl-card__actions mdl-card--border"]/a[@class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]',
        'a_Failure': 'xpath=id("actionfailure")/div[@class="mdl-card__actions mdl-card--border"]/a[@class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]',
        'a_Interventie': 'xpath=id("homestop")/div[@class="mdl-card__actions mdl-card--border"]/a[@class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]',
        'a_Quality': 'xpath=id("actionquality")/div[@class="mdl-card__actions mdl-card--border"]/a[@class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]',
        'a_Safety': 'xpath=id("actionsafety")/div[@class="mdl-card__actions mdl-card--border"]/a[@class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]',
        'a_Task': 'xpath=id("actiontask")/div[@class="mdl-card__actions mdl-card--border"]/a[@class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]',
        'button_verzenden': 'xpath=id("btnsave")',
        'Current_Actor': 'xpath=id("currentactionactor")',
        'Current_Owner': 'xpath=id("currentactionowner")',
        'Current_Status': 'xpath=id("b9ece692-1a2c-48fe-9056-81267680c7fb")/div[@class="mdl-card__supporting-text"]/table[1]/tbody[1]/tr[7]/td[@id="status"]',
        'div_Nieuwe actie': 'xpath=id("homeintervention")/div[@class="mdl-card__title"]',
        'h2_Angels': 'xpath=id("41ca13be-83bc-0018-8bd1-454f215dd1a3")/div[@class="mdl-card__title intervention"]/h2[@class="mdl-card__title-text"]',
        'input_Je bent eigenaar van mee': 'xpath=id("selectActor")',
        'input_Welk type actie wil je s': 'xpath=id("selectAction")',
        'i_keyboard_arrow_down': 'xpath=id("41ca13be-83bc-0018-8bd1-454f215dd1a3")/div[@class="mdl-card__supporting-text"]/div[@class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height getmdl-select__fullwidth is-dirty is-upgraded"]/label[1]/i[@class="mdl-icon-toggle__label material-icons"]',
        'li_Aankondiging': 'xpath=id("41ca13be-83bc-0018-8bd1-454f215dd1a3")/div[@class="mdl-card__supporting-text"]/div[@class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height getmdl-select__fullwidth is-dirty is-upgraded is-focused"]/div[@class="mdl-menu__container is-upgraded is-visible"]/ul[@class="mdl-menu mdl-menu--bottom-left mdl-js-menu"]/li[@class="mdl-menu__item"]',
        'li_first_action': 'xpath=//*[@class = "registration actions-row testfirst"]',
        'li_Interventie': 'xpath=id("41ca13be-83bc-0018-8bd1-454f215dd1a3")/div[@class="mdl-card__supporting-text"]/div[@class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height getmdl-select__fullwidth is-dirty is-upgraded"]/div[@class="mdl-menu__container is-upgraded is-visible"]/ul[@class="mdl-menu mdl-menu--bottom-left mdl-js-menu"]/li[@class="mdl-menu__item"]',
        'li_Klacht': 'xpath=id("41ca13be-83bc-0018-8bd1-454f215dd1a3")/div[@class="mdl-card__supporting-text"]/div[@class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height getmdl-select__fullwidth is-dirty is-upgraded is-focused"]/div[@class="mdl-menu__container is-upgraded is-visible"]/ul[@class="mdl-menu mdl-menu--bottom-left mdl-js-menu"]/li[@class="mdl-menu__item"]',
        'li_Taak': 'xpath=id("41ca13be-83bc-0018-8bd1-454f215dd1a3")/div[@class="mdl-card__supporting-text"]/div[@class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height getmdl-select__fullwidth is-dirty is-upgraded is-focused"]/div[@class="mdl-menu__container is-upgraded is-visible"]/ul[@class="mdl-menu mdl-menu--bottom-left mdl-js-menu"]/li[@class="mdl-menu__item"]',
        'li_Tweetie Birds': 'xpath=id("selectActorOptions")/li[@class="mdl-menu__item"]',
        'span_Angels': 'xpath=id("41ca13be-83bc-0018-8bd1-454f215dd1a3")/div[@class="mdl-list__item-primary-content"]/div[@class="mdl-list__item-text-header"]/span[1]',
        'textarea_Toelichting': 'xpath=id("41ca13be-83bc-0018-8bd1-454f215dd1a3-comment")'
    },    
    ActionFlow: {
        'a_Ben je daar blij mee_smiley veryhappy_gray veryhappy': 'xpath=id("55ca13be-83bc-0083-8bd1-454f215dd1a3")/div[@class="smileys"]/a[@class="smiley veryhappy_gray veryhappy"]',
        'a_listRegistraties': 'xpath=id("mnuworkstock")',
        'button_Accept': 'xpath=id("btnaccept")',
        'button_Afsluiten': 'xpath=id("btnclosed")',
        'button_Cancel': 'xpath=id("btntaskclose")',
        'button_Doorsturen': 'xpath=id("btnforward")',
        'button_Message': 'xpath=id("btnupdate")',
        'button_Not solved': 'xpath=id("btnnotsolved")',
        'button_Opslaan': 'xpath=id("btnsave")',
        'button_Send': 'xpath=id("btntasksend")',
        'button_Solved': 'xpath=id("btnsolved")',
        'button_Start actie': 'xpath=id("btnstartaction")',
        'div_assignment': 'xpath=id("btnactions")',
        'div_Interventie': 'xpath=id("checklist430a4955-0070-42f0-8076-997b1a6204c6")',
        'div_Message': 'xpath=id("task")',
        'div_Send        Cancel': 'xpath=id("task")/div[@class="mdl-card__actions mdl-card--border"]',
        'input_e-mailadres_password': 'xpath=id("password")',
        'input_Order nummer_ordernumber': 'xpath=id("ordernumber")',
        'input_Titel_name': 'xpath=id("name")',
        'selectInitiatingActor': 'xpath=id("selectowningactor")',
        'selectOwningActor': 'xpath=id("selectowningactor")',
        'select_-- Geen teamlid --Boris Boss': 'xpath=id("selectowninguser")',
        'strong_Angels': 'xpath=id("currentactionactor")/strong[1]',
        'td_Behandelaar': 'xpath=id("d042594d-ae4f-4b2b-b6ac-52f6428cd886")/div[@class="mdl-card__supporting-text action-table"]/table[1]/tbody[1]/tr[14]/td[@class="action-table-firstcolumn"]',
        'td_Brave Hendrik': 'xpath=id("d042594d-ae4f-4b2b-b6ac-52f6428cd886")/div[@class="mdl-card__supporting-text action-table"]/table[1]/tbody[1]/tr[12]/td[2]',
        'td_currentowner': 'xpath=id("currentactionowner")',
        'td_Jade Tigers': 'xpath=id("d042594d-ae4f-4b2b-b6ac-52f6428cd886")/div[@class="mdl-card__supporting-text action-table"]/table[1]/tbody[1]/tr[11]/td[2]',
        'td_Status': 'xpath=id("status")',
        'textarea_Bericht_comment': 'xpath=id("comment")',
        'textarea_Kun je daar meer over vertellen_textarea55ca13be-83bc-0086-8bd1-454f215dd1a3': 'xpath=id("textarea55ca13be-83bc-0086-8bd1-454f215dd1a3")',
        'textarea_Message_message': 'xpath=id("message")'
    },
    Companies: {
        CompanySettings: {
            'a_settingsCompany settings': 'xpath=id("mnusettings")',
            'button_Save': 'xpath=id("btnsave")',
            'div_Module Feedback': 'xpath=id("ModuleFeedbackSettings")/v-pane[1]/v-pane-header[@id="pane-header"]/div[@class="md-title"]',
            'input_password': 'xpath=id("password")',
            'input_username': 'xpath=id("username")',
            'input_Year_selectRatingReminderPeriod': 'xpath=id("selectRatingReminderPeriod")',
            'span_Early adopter': 'xpath=id("EarlyAdopter")/span[@class="mdl-switch__label"]',
            'span_mdl-button__ripple-contai': 'xpath=id("btnedit")/span[@class="mdl-button__ripple-container"]',
            'span_Module Feedback': 'xpath=id("ModuleFeedback")/span[@class="mdl-switch__label"]',
            'span_Show Rating': 'xpath=id("ShowRating")/span[@class="mdl-switch__label"]'
        }
    },
    'buttonBack': 'xpath=//*[@id = "btnback"]',
    'buttonSave': 'xpath=//*[@id = "btnsave"]',
    'buttonSaveAndAction': 'xpath=//*[@id = "btnsaveaction"]',
    'buttonStartAction': 'xpath=//*[@id = "btnstartaction"]',
    'buttonStartActionFromTask': 'xpath=//*[@id = "btnactionstart"]',
    'inputName': 'xpath=id("name")',
    'RegistrationTitle': 'xpath=id("2682848c-45a4-48e6-8b28-c29ee3d85898")/div[@class="mdl-card__supporting-text action-table"]/table[1]/tbody[1]/tr[1]/td[2]',
    'selectActionActor': 'xpath=//*[@id = "selectactionactor"]',
    'selectActionUser': 'xpath=//*[@id = "selectactionhandler"]',
    'selectLocation': 'xpath=//*[@id = "selectlocation"]',
    'selectChecklist': 'xpath=id("selectchecklist")',
    'selectFilterActies': 'xpath=id("selectfilter")',
    'selectReportingActor': 'xpath=//*[@id = "selectreportingactor"]',
    'selectShift': 'xpath=id("selectShift")',
    'showClosed': 'xpath=//*[@id = "extrafilterclosed"]',
    'textareaDescription': 'xpath=id("comment")',
    'textareaMessage': 'xpath=//*[@id = "message"]'

}

const Actors = {
    'a_peopleActors': 'xpath=id("mnuactors")',
    'button_Save': 'xpath=id("btnsave")',
    'div_Actions (2)': 'xpath=id("41ca13be-83bc-0799-8bd1-454f215dd1a3")/v-accordion[@class="v-accordion-material"]/v-pane[3]/v-pane-header[@id="pane-header"]/div[@class="md-title"]',
    'div_Feedback': 'xpath=id("41ca13be-83bc-0799-8bd1-454f215dd1a3")/v-accordion[@class="v-accordion-material"]/v-pane[2]/v-pane-header[@id="pane-header"]/div[@class="md-title"]',
    'div_Happymeter': 'xpath=id("41ca13be-83bc-0799-8bd1-454f215dd1a3")/v-accordion[@class="v-accordion-material"]/v-pane[1]/v-pane-header[@id="pane-header"]/div[@class="md-title"]',
    'div_Okay the actor is removed.': 'xpath=id("toast-container")/div[@class="toast toast-info"]',
    'h2_Teams en players': 'xpath=id("main")/div[@class="maxime-card-wide maxime-mdl-card"]/div[@class="mdl-card__title teams"]/h2[@class="mdl-card__title-text"]',
    'input_search': 'xpath=id("search")',
    'input_txtcode': 'xpath=//input[@type = "text" and @id = "txtcode"]',
    'input_txtname': 'xpath=//input[@type = "text" and @id = "txtname"]',
    'i_add': 'xpath=id("btnaddactor")',
    'i_search': 'xpath=id("btnsearch")',
    'ripple_container_close': 'xpath=id("btnclose")/span[@class="mdl-button__ripple-container"]',
    'ripple_container_delete': 'xpath=id("btndelete")/span[@class="mdl-button__ripple-container"]',
    'ripple_container_edit': 'xpath=id("btnedit")/span[@class="mdl-button__ripple-container"]',
    'span_Tweetie Birds': 'xpath=id("41ca13be-83bc-0799-8bd1-454f215dd1a3")/div[@class="mdl-list__item-primary-content"]/div[@class="mdl-list__item-text-header"]/span[1]',
    'textarea_txtgoals': 'xpath=id("txtgoals")',
    'textarea_txtinfo': 'xpath=id("txtinfo")'
}

const Basics = {
    'account': 'xpath=id("btnaccount")/div[@class="maxime-avatar"]',
    'a_homeHome': 'xpath=id("mnuhome")',
    'a_Management': 'xpath=//li[@id = "mnumanagement"]',
    'btnClose_Or_Back': 'xpath=id("btnclose")',
    'button_Register': 'xpath=id("register")',
    'button_Send link': 'xpath=id("sendresetlink")',
    // 'Comment-Description': 'xpath=id("comment")',
    'Comment-Description': 'xpath=//*[contains(@class, "ql-editor")]', // DONT USE IF NOT USING QUILL
    'Date-Deadline': 'xpath=id("name")',
    'Date-Registration': 'xpath=id("name")',
    'detail_title': '//h2[@class = "mdl-card__title-text"]',
    'div_Sorry this username is alr': 'xpath=id("toast-container")/div[@class="toast toast-info"]/div[@class="toast-message"]',
    'div_You are almost ready. An e': 'xpath=id("toast-container")/div[@class="toast toast-info"]/div[@class="toast-message"]',
    'inputOrderNumber': 'xpath=id("ordernumber")',
    'input_email': 'xpath=id("email")',
    'input_name': 'xpath=id("name")',
    'input_search': 'xpath=id("search")',
    'input_username': 'xpath=id("username")',
    'i_search': 'xpath=id("btnsearch")',
    'list_title': 'xpath=id("41ca13be-83bc-0018-8bd1-454f215dd1a3")/div[@class="mdl-card__title actor"]/h2[@class="mdl-card__title-text"]',
    'li_Signout': 'xpath=id("mnusignout")',
    'Message-Description': '#message > .ql-editor',
    'ProgressBar': 'xpath=//*[@id = "progress"]',
    'ProgressBarTask': 'xpath=//*[@id = "task_progress"]',
    'selectTweetieBird': 'xpath=id("selectActor")',
    'signoff': 'xpath=id("mnusignout")',
    'span_mdl-button__ripple-contai_1': 'xpath=id("resetpassword")',
    'span_mdl-button__ripple-contai_2': 'xpath=id("join")/span[@class="mdl-button__ripple-container"]',
    'span_mdl-button__ripple-contai_3': 'xpath=id("login")/span[@class="mdl-button__ripple-container"]',
    'span_mdl-checkbox__ripple-cont': 'xpath=id("cookie")/label[@class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded"]/span[@class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"]',
    'span_mdl-checkbox__ripple-cont_1': 'xpath=id("trace")/label[@class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded"]/span[@class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"]'
}

const Checklist = {
    'a_Controlelijsten': 'xpath=id("homechecklists")',
    'body__aa07d8': 'xpath=/html[@class="mdl-js"]/body[1]',
    'button_Opslaan': 'xpath=id("btnsave")',
    'button_Verzenden': 'xpath=id("btnindicatorsave")',
    'div_Controlelijsten_59db7d': 'xpath=id("actionbar")',
    'div_TT': 'xpath=id("btnaccount")/div[@class="maxime-avatar"]',
    'inputCode': 'xpath=//*[@id = "txtcode"]',
    'inputLabel': 'xpath=//*[@id = "txtlabel"]',
    'inputName': 'xpath=//*[@id = "txtname"]',
    'input_Naam_name': 'xpath=id("name")',
    'input_search_search': 'xpath=id("search")',
    'input_Type_selectIndicatorType': 'xpath=id("selectIndicatorType")',
    'i_add': 'xpath=id("btnaddchecklist")/i[@class="material-icons"]',
    'i_search': 'xpath=id("btnsearch")',
    'li_Beheer': 'xpath=id("mnumanagement")',
    'li_first_checklist': 'xpath=//*[@class = "checklist actions-row  testfirst"]',
    'li_Scale 10': 'xpath=id("selectIndicatorTypeOptions")/li[@class="mdl-menu__item"]',
    'li_Wijzigen': 'xpath=id("mnuedit75a9bc59-b656-4cfe-979e-7c6f6976f15e")',
    'select_ComplimeterHappyMeter_0e130a': 'xpath=id("selectType")',
    'select_DefaultOrderNumberAndDat_c8d65c': 'xpath=id("selectView")',
    'span_Actief_mdl-switch__ripple-container md_ad4aeb': 'xpath=id("enabled")/span[@class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"]',
    'span_arrow_back_mdl-button__ripple-container': 'xpath=id("btnclose")/span[@class="mdl-button__ripple-container"]',
    'span_delete_mdl-button__ripple-container': 'xpath=id("btndelete")/span[@class="mdl-button__ripple-container"]',
    'span_HappyMeter Standard Djurve HappyMeter _13fb9d': 'xpath=id("430a4955-0002-42f0-8076-997b1a6204c6")/div[@class="mdl-list__item-primary-content"]/div[@class="mdl-list__item-text-header"]/span[1]',
    'span_more_vert_mdl-button__ripple-container': '',
    'textarea_Informatie_info': 'xpath=id("info")',
    'textarea_Info_txtinfo': 'xpath=id("txtinfo")'
}

const Dashboard = {
    'buttonBack': 'xpath=id("btnclose")',
    'buttonBackDetail': 'xpath=//*[@id="btnclosedetail"]//*[@class="material-icons"]',
    'homeActions': 'xpath=id("homeactions")',
    'homeAnnouncement': 'xpath=id("checklist430a4955-0060-42f0-8076-997b1a6204c6")',
    'homeAskFeedback': 'xpath=id("homefeedbackrequest")',
    'homeComplaint': 'xpath=id("checklist430a4955-0080-42f0-8076-997b1a6204c6")',
    'homeComplimeter': 'xpath=id("homefeedback")',
    'homeFailure': 'xpath=id("checklist430a4955-0110-42f0-8076-997b1a6204c6")',
    'homeHappyMeter': 'xpath=id("homehappymeter")',
    'homeIntervention': 'xpath=id("checklist430a4955-0070-42f0-8076-997b1a6204c6")',
    'HomeJoinCompanies': 'xpath=id("homecompanies")',
    'homeManagementReports': 'xpath=id("homeviewvisualreports")',
    'homeMyGroups': 'xpath=id("homemygroups")',
    'homeMyNetwork': 'xpath=id("homenetwork")',
    'homeMyTeams': 'xpath=id("homemyactors")',
    'homeQuality': 'xpath=id("checklist430a4955-0100-42f0-8076-997b1a6204c6")',
    'homeSafety': 'xpath=id("checklist430a4955-0090-42f0-8076-997b1a6204c6")',
    'homeTask': 'xpath=id("checklist430a4955-0050-42f0-8076-997b1a6204c6")',
    'homeWiki': 'xpath=id("homewiki")'
}

const Groups = {
    'a_group_workGroups': 'xpath=id("mnugroups")',
    'button_add': 'xpath=id("btnaddgroup")',
    'button_Save': 'xpath=id("btnsave")',
    'h2_Groepen': 'xpath=id("main")/div[@class="maxime-card-wide maxime-mdl-card"]/div[@class="mdl-card__title groups"]/h2[@class="mdl-card__title-text"]',
    'input_search': 'xpath=id("search")',
    'input_txtname': 'xpath=id("txtname")',
    'i_search': 'xpath=id("btnsearch")',
    'span_Dev Group': 'xpath=id("41ca13be-67bc-0003-8bd1-454f215dd1a9")/div[@class="mdl-list__item-primary-content"]/div[@class="mdl-list__item-text-header"]/span[1]',
    'span_mdl-button__ripple-contai': 'xpath=id("btnclose")/span[@class="mdl-button__ripple-container"]',
    'span_mdl-button__ripple-contai_1': 'xpath=id("btnedit")/span[@class="mdl-button__ripple-container"]',
    'span_mdl-button__ripple-contai_2': 'xpath=id("btndelete")/span[@class="mdl-button__ripple-container"]',
    'textarea_txtinfo': 'xpath=id("txtinfo")'
}

const Menu = {
    'menuActors': 'xpath=id("mnuactors")',
    'menuGroups': 'xpath=id("mnugroups")',
    'menuHappymeter': 'xpath=//a[@id = "mnutell"]',
    'menuHome': 'xpath=id("mnuhome")',
    'menuNetwerk': 'xpath=id("mnudashboard")',
    'menuRegistration': 'xpath=//*[@id = "mnuregistration"]',
    'menuTitle': 'xpath=id("mnuchecklists")',
    'menuWorkstock': 'xpath=//*[@id = "mnuworkstock"]'
}

const Shortcuts = {
    'ShortcutAccount': 'xpath=id("btnaccount")',
    'ShortcutAssignent': 'xpath=//div[@id = "btnactions" and (text() = "assignment" or . = "assignment")]',
    'ShortcutCompanySwitch': 'xpath=//div[@id = "btncompany2" and (text() = "business" or . = "business")]',
    'ShortcutNotifications': 'xpath=id("btnnotifications")',
    'ShortcutSettings': 'xpath=id("mnumysettings")'
}

module.exports = {
    Global, 
    Defaults, 
    Acties,
    Actors,
    Basics,
    Checklist,
    Dashboard,
    Groups,
    Menu,
    Shortcuts,
}