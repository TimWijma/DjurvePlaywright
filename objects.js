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
        'li_first_action': 'xpath=//*[@class = "registration actions-row testfirst"]',
    },
    ActionFields: {
        'actionActionHandler': 'xpath=id("currentactionowner")',
        'actionActionOwner': 'xpath=id("currentactionactor")',
        'actionName': 'xpath=id("registrationname")',
        'actionOwner': 'xpath=id("registrationinitiatingactor")',
        'actionReporter': 'xpath=id("registrationinitiatinguser")',
        'actionStatus': 'xpath=id("status")',
        'actionType': 'xpath=id("registrationtype")'
    },      
    ActionFlow: {
        'a_Ben je daar blij mee_smiley veryhappy_gray veryhappy': 'xpath=//div[@id="55ca13be-83bc-0083-8bd1-454f215dd1a3"]/div/a[5]',
        'a_listRegistraties': 'xpath=id("mnuworkstock")',
        'button_Accept': 'xpath=id("btnaccept")',
        'button_Afsluiten': 'xpath=id("btnclosed")',
        'button_Doorsturen': 'xpath=id("btnforward")',
        'button_Message': 'xpath=id("btnupdate")',
        'button_Not solved': 'xpath=id("btnnotsolved")',
        'button_Send': 'xpath=id("btntasksend")',
        'button_Solved': 'xpath=id("btnsolved")',
        'div_assignment': 'xpath=id("btnactions")',
        'div_Interventie': 'xpath=id("checklist430a4955-0070-42f0-8076-997b1a6204c6")',
        'div_Message': 'xpath=id("task")',
        'td_currentowner': 'xpath=id("currentactionowner")',
        'td_Status': 'xpath=id("status")',
        'textarea_Kun je daar meer over vertellen_textarea55ca13be-83bc-0086-8bd1-454f215dd1a3': 'xpath=id("textarea55ca13be-83bc-0086-8bd1-454f215dd1a3")',
    },
    Anonymous: {
        'a_Gaan we door_light green_gray': 'xpath=id("55ca13be-83bc-0101-8bd1-454f215dd1a3")/div[@class="lights"]/a[@class="light green_gray"]',
        'button_Save': 'xpath=//*[@id = "btnsave"]',
        'div_anonymous': '//div[@class = "anonymous"]',
        'div_Quality': 'xpath=id("checklist430a4955-0100-42f0-8076-997b1a6204c6")/div[@class="mdl-card__title"]',
        'input_Title_name': 'xpath=//*[@id = "name"]',
        'td_AnonymousActor': 'xpath=//*[@id = "registrationinitiatinguser"]',
        'td_AnonymousUser': 'xpath=//*[@id = "registrationinitiatingactor"]'
    },
    Buttons: {
        'a_listRegistraties': 'xpath=//*[@id = "mnuworkstock"]',
        'button_Accepteren': 'xpath=id("btnaccept")',
        'button_add': 'xpath=id("btnaddaction")',
        'button_Afsluiten': 'xpath=id("btnclosed")',
        'button_Annuleren': 'xpath=id("btntaskclose")',
        'button_Annuleren_1': 'xpath=id("btnactioncancel")',
        'button_Doorsturen': 'xpath=id("btnforward")',
        'button_Opslaan  actie': 'xpath=id("btnsaveaction")',
        'button_Opslaan': 'xpath=id("btnsave")',
        'button_Terug': 'xpath=id("btnback")',
        'button_Terugtrekken': 'xpath=id("btnwithdraw")',
        'button_Verzenden': 'xpath=id("btnactionstart")',
        'button_Weigeren': 'xpath=id("btnreject")',
        'input_Titel_name': 'xpath=id("name")',
        'i_edit': 'xpath=id("btnedit")/i[@class="material-icons"]',
        'i_message': 'xpath=id("btnupdate")/i[@class="material-icons"]',
        'i_share': 'xpath=id("btnshare")/i[@class="material-icons"]',
        'select_-- Selecteer team --Agullas Mengen M_2b7149': 'xpath=id("selectactionactor")',
        'select_-- Selecteer team of player --Alien _db9ad7': 'xpath=id("selectreportingactor")',
        'span_Disturbance': 'xpath=id("checklist430a4955-0110-42f0-8076-997b1a6204c6")/span[1]',
    },
    ChangeActionAndVerySave: {
        'a_Gaan we door_light green_gray': 'xpath=id("55ca13be-83bc-0081-8bd1-454f215dd1a3")/div[@class="lights"]/a[@class="light green_gray"]',
        'button_Edit': 'xpath=id("btnedit")',
        'button_Save': 'xpath=id("btnsave")',
        'button_Voor mij': 'xpath=id("btnassignme")',
        'div_assignment': 'xpath=id("btnactions")',
        'div_LL': 'xpath=id("btnaccount")/div[@class="maxime-avatar"]',
        'input_Waarom wel of niet_text55ca13be-83bc-_1614b0': 'xpath=id("text55ca13be-83bc-0082-8bd1-454f215dd1a3")',
        'li_Sign off': 'xpath=id("mnusignout")',
    },    
    Companies: {
        Companies: {
            'a_peopleTeams': 'xpath=id("mnuactors")',
            'a_settingsOrganisatie instelli': 'xpath=id("mnusettings")',
            'a_star tmp_fs': 'xpath=//div[@id="55ca13be-83bc-0002-8bd1-454f215dd1a3"]/div/a[4]',
            'a_starVerbeteren': 'xpath=id("homefeedback")',
            'button_company_chose': 'xpath=//li[(text() = "${companyname}" or . = "${companyname}")]',
            'button_company_delete': 'xpath=id("btndeletecompany")',
            'button_company_switch': 'xpath=id("btncompany2")',
            'button_Join company': 'xpath=id("btnjoin")',
            'button_opslaan': 'xpath=id("btnsave")',
            'button_opslaan_1': 'xpath=id("btnpartnersave")',
            'button_verzenden': 'xpath=id("btnsave")',
            'div_Co-teams (0)edit': 'xpath=//*[@id = "btnmembersedit"]',
            'div_opslaan': 'xpath=//div[@id="00000000-0000-0000-0000-000000000000"]/div[8]',
            'div_Organisaties': 'xpath=//div[@id="homecompanies"]/div',
            'input_Company name_txtname': 'xpath=id("txtname")',
            'input_search_search': 'xpath=id("search")',
            'i_add': 'xpath=//button[@id="btnaddcompany"]/i',
            'i_edit': 'xpath=id("btnpartnersedit")',
            'i_search': 'xpath=id("btnsearch")',
            'span_ClickFirstCompany': 'xpath=//*[contains(@class, "company") and contains(@class, "testfirst")]',
            'span_Team1': 'xpath=//span[(contains(text(), "Team1") or contains(., "Team1"))]',
            'span_Team1_mdl-checkbox__rippl': 'xpath=//ul[@id="partners"]/li/span[2]/label/span[3]',
            'textarea_Info_txtinfo': 'xpath=id("txtinfo")',
            'textarea_Message_comment': 'xpath=id("comment")',
        },
        CompanySettings: {
            'a_settingsCompany settings': 'xpath=id("mnusettings")',
            'button_Save': 'xpath=id("btnsave")',
            'div_Module Feedback': 'xpath=id("ModuleFeedbackSettings")/v-pane[1]/v-pane-header[@id="pane-header"]/div[@class="md-title"]',
            'input_password': 'xpath=id("password")',
            'input_username': 'xpath=id("username")',
            'span_Early adopter': 'xpath=id("EarlyAdopter")/span[@class="mdl-switch__label"]',
            'span_mdl-button__ripple-contai': 'xpath=id("btnedit")/span[@class="mdl-button__ripple-container"]',
            'span_Module Feedback': 'xpath=id("ModuleFeedback")/span[@class="mdl-switch__label"]',
            'span_Show Rating': 'xpath=id("ShowRating")/span[@class="mdl-switch__label"]'
        }
    },
    Complaint: {
        'a_Ben je daar blij mee_smiley veryhappy_gray veryhappy': 'xpath=//div[@id="55ca13be-83bc-0083-8bd1-454f215dd1a3"]/div/a[5]',
        'input_Waarom wel of niet_text55ca13be-83bc-_1614b0': 'xpath=//*[@id = "text55ca13be-83bc-0082-8bd1-454f215dd1a3"]',
        'textarea_Beschrijving_comment': 'xpath=//*[@id = "textarea55ca13be-83bc-0086-8bd1-454f215dd1a3"]'
    },
    Critical: {
        'div_Kritiek': 'xpath=id("checklist430a4955-0070-42f0-8076-997b1a6204c6")',
    },
    FieldTest: {
        'a_Ben je daar blij mee_smiley verysad_gray': 'xpath=id("55ca13be-83bc-0083-8bd1-454f215dd1a3")/div[@class="smileys"]/a[@class="smiley verysad_gray"]',
        'a_Gaan we door_light red_gray': 'xpath=id("55ca13be-83bc-0081-8bd1-454f215dd1a3")/div[@class="lights"]/a[@class="light red_gray"]',
        'button_Opslaan': 'xpath=id("btnsave")',
        'button_Terug': 'xpath=id("btnback")',
        'div_Klacht': 'xpath=id("checklist430a4955-0080-42f0-8076-997b1a6204c6")/div[@class="mdl-card__title"]',
        'input_NumberAmount': 'xpath=//*[@id = "number55ca13be-83bc-1090-8bd1-454f215dd1a3"]',
        'input_Titel_name': 'xpath=id("name")',
        'input_Waarom wel of niet_text55ca13be-83bc-_1614b0': 'xpath=//*[@id = "text55ca13be-83bc-0082-8bd1-454f215dd1a3"]',
        'input_Wanneer heb je dat losgelaten': 'xpath=//*[@id = "date55ca13be-83bc-0085-8bd1-454f215dd1a3"]',
        'input_Wat is er geheim aan deze afdeling_te_cdaa23': 'xpath=//*[@id = "text55ca13be-83bc-0089-8bd1-454f215dd1a3"]',
        'input_Wat was exact de laatste keer_date': 'xpath=//*[@id = "datetime55ca13be-83bc-1091-8bd1-454f215dd1a3"]',
        'input_Wat was exact de laatste keer_time': 'xpath=//*[@id = "datetimetime55ca13be-83bc-1091-8bd1-454f215dd1a3"]',
        'select_-- Company --13thFloorAgullas Mengen_117033': 'xpath=id("group55ca13be-83bc-0088-8bd1-454f215dd1a3")',
        'select_Vrolijk                    Weglachen_82a43c': 'xpath=id("list55ca13be-83bc-0084-8bd1-454f215dd1a3")',
        'tab Extra informatie': 'xpath=//*[@id = "accordion_rating_header"]',
        'td_Beschrijving voor test': 'xpath=//*[@id = "registrationmessage"]',
        'td_Jade Tigers': 'xpath=//*[@id = "registrationinitiatingactor"]',
        'td_Tjitske Tester': 'xpath=//*[@id = "registrationinitiatinguser"]',
        'textarea_Kun je daar meer over vertellen_te_f9f6f4': 'xpath=id("textarea55ca13be-83bc-0086-8bd1-454f215dd1a3")'
    },
    Search: {
        'div_assignment': 'xpath=//*[@id = "btnactions"]',
        'select_-- Alles --                Gestart  _b659bf': 'xpath=//*[@id = "selectstatus"]',
        'select_-- Alles --Agullas0 AngelsAngelsAgul_3c74f1': 'xpath=//*[@id = "selectowningactor"]',
        'select_-- Alles --AgullasAgullas Mengen Mid_8da6b0': 'xpath=//*[@id = "selectinitiatingactor"]',
    },
    Subactions: {
        'button_Complaint 2': 'xpath=//*[@id = "checklist430a4955-0150-42f0-8076-997b1a6204c6"]',
        'button_Disturbance': 'xpath=//*[@id = "checklist430a4955-0110-42f0-8076-997b1a6204c6"]',
        'button_Opslaan   terug': 'xpath=//*[@id = "btnsaveclose"]',
        'input_Titel_name': 'xpath=//*[@id = "name"]',
        'select_-- Selecteer team of player --Alien _db9ad7': 'xpath=//*[@id = "selectreportingactor"]',
        
    },
    
    'buttonBack': 'xpath=//*[@id = "btnback"]',
    'buttonSave': 'xpath=//*[@id = "btnsave"]',
    'buttonSaveAndAction': 'xpath=//*[@id = "btnsaveaction"]',
    'buttonStartAction': 'xpath=//*[@id = "btnstartaction"]',
    'buttonStartActionFromTask': 'xpath=//*[@id = "btnactionstart"]',
    'inputName': 'xpath=id("name")',
    'RegistrationTitle': 'xpath=//*[@id = "registrationname"]',
    'selectActionActor': 'xpath=//*[@id = "selectactionactor"]',
    'selectActionUser': 'xpath=//*[@id = "selectactionhandler"]',
    'selectLocation': 'xpath=//*[@id = "selectlocation"]',
    'selectFilterActies': 'xpath=id("selectfilter")',
    'selectReportingActor': 'xpath=//*[@id = "selectreportingactor"]',
    'selectShift': 'xpath=id("selectShift")',
    'showClosed': 'xpath=//*[@id = "extrafilterclosed"]',

}

const Activities = {
    "Clean And Check": {
        'ActivityCheck_Goed': 'xpath=id("btnok41ca13be-99bc-0004-8bd1-454f215dd1a3")/span[text()=\'Goed\']',
        'ActivityCleanMachine_Klaar': 'xpath=id("btnok41ca13be-99bc-0001-8bd1-454f215dd1a3")/span[text()=\'Klaar\']',
        'ActivityDeepCleanMachine_Skip': 'xpath=id("btnskip41ca13be-99bc-0003-8bd1-454f215dd1a3")/span[text()=\'Skip\']',
        'button_Opslaan': 'xpath=id("btnsave")',
        'select_-- Selecteer een dienst --          _4baf65': 'xpath=id("selectShift")',
        'select_-- Selecteer team --Agullas Mengen M_0bb3a5': 'xpath=id("selectreportingactor")',
    },
    'a_codeActivities': 'xpath=id("mnuactivities")',
    'button_add': 'xpath=id("btnadditem")',
    'button_Save': 'xpath=id("btnsave")',
    'first_activity': 'xpath=//*[@class = "mdl-list__item mdl-list__item--three-line item testfirst"]',
    'input_Code_txtcode': 'xpath=id("txtcode")',
    'input_Name_txtname': 'xpath=id("txtname")',
    'textarea_Info_txtinfo': 'xpath=id("txtinfo")',
    'textarea_Wiki_txtwiki': 'xpath=id("txtwiki")'
}

const Actors = {
    'a_peopleActors': 'xpath=id("mnuactors")',
    'button_Save': 'xpath=id("btnsave")',
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
    'button_Register': 'xpath=id("register")',
    'button_Send link': 'xpath=id("sendresetlink")',
    // 'Comment-Description': 'xpath=id("comment")',
    'Comment-Description': 'xpath=//*[contains(@class, "ql-editor")]', // DONT USE IF NOT USING QUILL
    'Date-Deadline': 'xpath=//*[@id = "txtDeadline"]',
    'Date-Registration': 'xpath=//*[@id = "txtDate"]',
    'detail_title': '//h2[@class = "mdl-card__title-text"]',
    'div_Sorry this username is alr': 'xpath=id("toast-container")/div[@class="toast toast-info"]/div[@class="toast-message"]',
    'div_You are almost ready. An e': 'xpath=id("toast-container")/div[@class="toast toast-info"]/div[@class="toast-message"]',
    'inputOrderNumber': 'xpath=id("ordernumber")',
    'input_email': 'xpath=id("email")',
    'input_name': 'xpath=id("name")',
    'input_search': 'xpath=id("search")',
    'input_username': 'xpath=id("username")',
    'i_search': 'xpath=id("btnsearch")',
    'list_title': 'xpath=//*[@id = "title"]',
    'li_Signout': 'xpath=id("mnusignout")',
    'Message-Description': '#message > .ql-editor',
    'ProgressBar': 'xpath=//*[@id = "progress"]',
    'ProgressBarTask': 'xpath=//*[@id = "task_progress"]',
    'signoff': 'xpath=id("mnusignout")',
    'span_mdl-button__ripple-contai_1': 'xpath=id("resetpassword")',
    'span_mdl-button__ripple-contai_2': 'xpath=id("join")/span[@class="mdl-button__ripple-container"]',
    'span_mdl-button__ripple-contai_3': 'xpath=id("login")/span[@class="mdl-button__ripple-container"]',
    'span_mdl-checkbox__ripple-cont': 'xpath=id("cookie")/label[@class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded"]/span[@class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"]',
    'span_mdl-checkbox__ripple-cont_1': 'xpath=id("trace")/label[@class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded"]/span[@class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"]'
}

const Boards = {
    'actorAgullasMengenOchtend': 'xpath=id("41ca13be-83bc-0031-8bd1-454f215dd1a3")/div[@class="mdl-card__actions mdl-card--border"]/a[@class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]/span[@class="mdl-button__ripple-container"]',
    'a_Creativity is key_smiley veryhappy_gray': 'xpath=id("55ca13be-83bc-0031-8bd1-454f215dd1a3")/div[@class="smileys"]/a[@class="smiley veryhappy_gray"]',
    'a_The work they deliver is from a high qual_16ca11': 'xpath=id("55ca13be-83bc-0001-8bd1-454f215dd1a3")/div[@class="djurfs"]/a[@class="djurf"]',
    'button_Complimeter': 'xpath=id("btncomplimeter")',
    'button_Happymeter': 'xpath=id("btnhappymeter")',
    'button_Save': 'xpath=id("btnsave")',
    'img_Planning_signal': 'xpath=id("signal55ca13be-83bc-0031-8bd1-454f216ee1a3")',
    'span_Angels (ANG)': 'xpath=id("41ca13be-83bc-0018-8bd1-454f215dd1a3")/div[@class="mdl-list__item-primary-content"]/div[@class="mdl-list__item-text-header"]/span[1]',
}


const Checklist = {
    'a_Controlelijsten': 'xpath=id("homechecklists")',
    'button_Opslaan': 'xpath=id("btnsave")',
    'div_TT': 'xpath=id("btnaccount")/div[@class="maxime-avatar"]',
    'inputCode': 'xpath=//*[@id = "txtcode"]',
    'inputLabel': 'xpath=//*[@id = "txtlabel"]',
    'inputName': 'xpath=//*[@id = "txtname"]',
    'input_search_search': 'xpath=id("search")',
    'i_add': 'xpath=id("btnaddchecklist")/i[@class="material-icons"]',
    'i_search': 'xpath=id("btnsearch")',
    'li_Beheer': 'xpath=id("mnumanagement")',
    'li_first_checklist': 'xpath=//*[@class = "checklist actions-row  testfirst"]',
    'select_ComplimeterHappyMeter_0e130a': 'xpath=id("selectType")',
    'span_arrow_back_mdl-button__ripple-container': 'xpath=id("btnclose")/span[@class="mdl-button__ripple-container"]',
    'span_delete_mdl-button__ripple-container': 'xpath=id("btndelete")/span[@class="mdl-button__ripple-container"]',
    'textarea_Informatie_info': 'xpath=id("info")',
    'textarea_Info_txtinfo': 'xpath=//*[@id = "txtinfo"]',
}

const Dashboard = {
    'buttonBack': 'xpath=id("btnclose")',
    'buttonBackDetail': 'xpath=//*[@id="btnclosedetail"]//*[@class="material-icons"]',
    'homeAnnouncement': 'xpath=id("checklist430a4955-0060-42f0-8076-997b1a6204c6")',
    'homeAskFeedback': 'xpath=id("homefeedbackrequest")',
    'homeComplaint': 'xpath=id("checklist430a4955-0080-42f0-8076-997b1a6204c6")',
    'homeComplimeter': 'xpath=id("homefeedback")',
    'homeFailure': 'xpath=id("checklist430a4955-0110-42f0-8076-997b1a6204c6")',
    'homeHappyMeter': 'xpath=id("homehappymeter")',
    'homeIntervention': 'xpath=id("checklist430a4955-0070-42f0-8076-997b1a6204c6")',
    'homeMyGroups': 'xpath=id("homemygroups")',
    'homeMyNetwork': 'xpath=id("homenetwork")',
    'homeMyTeams': 'xpath=id("homemyactors")',
    'homeQuality': 'xpath=id("checklist430a4955-0100-42f0-8076-997b1a6204c6")',
    'homeSafety': 'xpath=id("checklist430a4955-0090-42f0-8076-997b1a6204c6")',
    'homeTask': 'xpath=id("checklist430a4955-0050-42f0-8076-997b1a6204c6")',
}

const Feedback = {
    'button_Verzenden': 'xpath=id("btnsave")',
    'div_Complimeter': 'xpath=id("homefeedback")/div[@class="mdl-card__title"]',
    'h2_Complimeter': 'xpath=id("main")/div[@class="maxime-card-wide maxime-mdl-card"]/div[@class="mdl-card__title feedback"]/h2[@class="mdl-card__title-text"]',
    'ratingoption1': 'xpath=//div[@id="55ca13be-83bc-0001-8bd1-454f215dd1a3"]/div/a[2]',
    'ratingoption2': 'xpath=//div[@id="55ca13be-83bc-0002-8bd1-454f215dd1a3"]/div/a[2]',
    'ratingoption3': 'xpath=//div[@id="55ca13be-83bc-0003-8bd1-454f215dd1a3"]/div/a[5]',
    'span_Angels (ANG)': 'xpath=id("41ca13be-83bc-0018-8bd1-454f215dd1a3")/div[@class="mdl-list__item-primary-content"]/div[@class="mdl-list__item-text-header"]/span[1]',
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

const Happymeter = {
    Happymeter: {
        'button_Go to list': 'xpath=//button[@id = "btngotolist"]',
        'button_Send': 'xpath=id("btnsave")',
        'div_How do you feel': 'xpath=//div[@id="homehappymeter"]',
        'span_mdl-button__ripple-contai': 'xpath=id("btnclose")/span[@class="mdl-button__ripple-container"]',
        'span_Tweetie Birds': 'xpath=//span[(contains(text(), "Tweetie Birds") or contains(., "Tweetie Birds"))]',
        'star_neutral': 'xpath=//div[@id="55ca13be-83bc-0006-8bd1-454f215dd1a3"]/div/a[2]',
        'star_satisfied': 'xpath=//div[@id="55ca13be-83bc-0005-8bd1-454f215dd1a3"]/div/a[3]',
        'star_very_satisfied': 'xpath=//div[@id="55ca13be-83bc-0004-8bd1-454f215dd1a3"]/div/a[4]',
    },
    'h2_Happymeter': 'xpath=id("main")/div[@class="maxime-card-wide maxime-mdl-card"]/div[@class="mdl-card__title happymeter"]/h2[@class="mdl-card__title-text"]',
    'a_Creativity is key_smiley veryhappy_gray': 'xpath=//*[@class = "smiley veryhappy_gray"]',
    'button_Complimeter': 'xpath=id("btnfeedback")',
    'button_Datum': 'xpath=//*[@id = "btnDatepickerDate"]',
    'button_Nog een': 'xpath=id("btngotolist")',
    'button_ok': 'xpath=id("mddtp-date__ok")',
    'button_Verzenden': 'xpath=id("btnsave")',
    'h2_Complimeter': 'xpath=id("main")/div[@class="maxime-card-wide maxime-mdl-card"]/div[@class="mdl-card__title feedback"]/h2[@class="mdl-card__title-text"]',
    'h2_Dank je': 'xpath=id("result")/div[@class="mdl-card__title happymeter"]/h2[@class="mdl-card__title-text"]',
    'input_Order nummer_ordernumber': 'xpath=id("ordernumber")',
    'select_Shift': 'xpath=id("selectShift")',
    'span_Agullas Mengen Ochtend (AGU)': 'xpath=id("41ca13be-83bc-0031-8bd1-454f215dd1a3")/div[@class="mdl-list__item-primary-content"]/div[@class="mdl-list__item-text-header"]/span[1]',
}

const Machines = {
    'a_codeMachines': 'xpath=//*[@id = "mnumachines"]',
    'button_add': 'xpath=id("btnadditem")',
    'button_Save': 'xpath=id("btnsave")',
    'first_machine': 'xpath=//*[@class = "mdl-list__item mdl-list__item--three-line item testfirst"]',
    'input_Code_txtcode': 'xpath=id("txtcode")',
    'input_Name_txtname': 'xpath=id("txtname")',
    'textarea_Info_txtinfo': 'xpath=id("txtinfo")',
    'textarea_Wiki_txtwiki': 'xpath=id("txtwiki")'
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

const Request = {
    'a_starFeedback vragen': 'xpath=id("homefeedbackrequest")',
    'button_kopieer link': 'xpath=id("btncopylink")',
    'button_kopieren': 'xpath=id("btncopy")',
    'button_Maak verzoek': 'xpath=id("btnmakerequest")',
    'button_Verzend verzoek': 'xpath=id("btnsend")',
    'div_Djurve': 'xpath=id("djurve")',
    'div_Share': 'xpath=id("share")',
    'div_Vraag teamleden_mdl-card__title': 'xpath=id("feedback")',
    'div_Wil je je team vragen om de happymeter te gebruiken of een co-team vragen om feedback_mdl-card__title': 'xpath=id("happymeter")',
    'Select Actor': 'xpath=id("selectActor")',
    'span_- Boris Boss_mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center': 'xpath=id("partners")/li[@class="mdl-list__item"]/span[@class="mdl-list__item-secondary-action editmode"]/label[@class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded"]/span[@class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"]',
}

const Security = {
    'a_xxs link': 'xpath=id("41ca13be-83bc-0799-8bd1-454f215dd1a3")/div[@class="mdl-card__supporting-text compact"]/a[1]',
    'button_Opslaan': 'xpath=id("btnsave")',
    'div_Mijn teams en players': 'xpath=id("homemyactors")/div[@class="mdl-card__title"]',
    'info': 'xpath=id("txtinfo")',
    'span_edit_mdl-button__ripple-container': 'xpath=id("btnedit")/span[@class="mdl-button__ripple-container"]',
    'span_Tweetie Birds (TWE)': 'xpath=id("41ca13be-83bc-0799-8bd1-454f215dd1a3")/div[@class="mdl-list__item-primary-content"]/div[@class="mdl-list__item-text-header"]/span[1]',
    'wiki': 'xpath=id("txtwiki")'
}


const Shortcuts = {
    'ShortcutAccount': 'xpath=id("btnaccount")',
    'ShortcutAssignent': 'xpath=//div[@id = "btnactions" and (text() = "assignment" or . = "assignment")]',
    'ShortcutCompanySwitch': 'xpath=//div[@id = "btncompany2" and (text() = "business" or . = "business")]',
    'ShortcutNotifications': 'xpath=id("btnnotifications")',
    'ShortcutSettings': 'xpath=id("mnumysettings")'
}

const Signals = {
    'a_group_workGroups': 'xpath=//*[@id = "mnugroups"]',
    'button_Send': 'xpath=//*[@id = "btnsignalsave"]',
    'i_add': 'xpath=id("btnaddsignal")/i[@class="material-icons"]',
    'i_keyboard_arrow_down': 'xpath=id("popup_content")/div[@class="mdl-card__supporting-text"]/div[2]/div[@class="mdl-card__supporting-text"]/div[@class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height getmdl-select__fullwidth is-upgraded"]/label[1]/i[@class="mdl-icon-toggle__label material-icons"]',
    'i_search': 'xpath=//*[@id = "btnsearch"]',
    'input_Name_name': 'xpath=//*[@id = "name"]',
    'input_search_search': 'xpath=//*[@id = "search"]',
    'input_Sequence_sequence': 'xpath=//*[@id = "sequence"]',
    'li_Delete': 'xpath=//*[@id = "mnudeletea261f0a6-44d9-4f97-bcd8-397ca60614de"]',
    'li_Other': 'xpath=id("selectSignalTypeOptions")/li[@class="mdl-menu__item"]',
    'span_Enabled_mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center': 'xpath=id("enabled")/span[@class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"]',
    'span_Max -': 'xpath=id("41ca13be-67bc-0010-8bd1-454f215dd1a9")/div[@class="mdl-list__item-primary-content"]/div[@class="mdl-list__item-text-header"]/span[1]',
    'span_more_vert_mdl-button__ripple-container': 'xpath=id("mnusignala261f0a6-44d9-4f97-bcd8-397ca60614de")/span[@class="mdl-button__ripple-container"]',
}

const Smartphone = {
    'span_Aankondiging': 'xpath=id("title")',
    'span_Feedback vragen': 'xpath=id("title")',
    'span_Feedback': 'xpath=id("title")',
    'span_Happymeter': 'xpath=id("title")',
    'span_Interventie': 'xpath=id("title")',
    'span_interventiontasktitle': 'xpath=id("title")',
    'span_Klacht': 'xpath=id("title")',
    'span_Kwaliteit': 'xpath=id("title")',
    'span_Storing': 'xpath=id("title")',
    'span_Veiligheid': 'xpath=id("title")'
}


module.exports = {
    Global, 
    Defaults, 
    Acties,
    Activities,
    Actors,
    Basics,
    Boards,
    Checklist,
    Dashboard,
    Feedback,
    Groups,
    Happymeter,
    Machines,
    Menu,
    Request,
    Security,
    Shortcuts,
    Signals,
    Smartphone
}