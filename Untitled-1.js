curl -X GET "https://graph.facebook.com/v2.6/me/messenger_profile?fields=get_started&access_token=EAAB1iCN4ZA2EBANZBJelEVkPoj6IiKpKvaARiLpdQdd5jIU95v3ZCCYrFbi5oRtqeQg60vQ2czj7o9yGeCJLh4qJ7cSyNuBMjZBldZCHVDtTCghZAMn4skYsSZBwZCKOcMsZCr9Y8ZCzKoGtTJkEZCNNoW3qZAn2yHQGPkn0ZBz5qNYZBVigZDZD"
{ 
  "get_started":{
    "payload":"<GET_STARTED_PAYLOAD>"
  }
}

curl -X POST -H "Content-Type: application/json" -d '{
  "get_started":{
    "payload":"get_started"
  }
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=EAAB1iCN4ZA2EBANZBJelEVkPoj6IiKpKvaARiLpdQdd5jIU95v3ZCCYrFbi5oRtqeQg60vQ2czj7o9yGeCJLh4qJ7cSyNuBMjZBldZCHVDtTCghZAMn4skYsSZBwZCKOcMsZCr9Y8ZCzKoGtTJkEZCNNoW3qZAn2yHQGPkn0ZBz5qNYZBVigZDZD"

curl -X POST -H "Content-Type: application/json" -d '{
    "persistent_menu":[
    {
      "locale":"default",
      "composer_input_disabled": false,
      "call_to_actions":[
        {
          "title":"My Account",
          "type":"nested",
          "call_to_actions":[
            {
              "title":"Pay Bill",
              "type":"postback",
              "payload":"PAYBILL_PAYLOAD"
            },
            {
              "title":"History",
              "type":"postback",
              "payload":"HISTORY_PAYLOAD"
            },
            {
              "title":"Contact Info",
              "type":"postback",
              "payload":"CONTACT_INFO_PAYLOAD"
            }
          ]
        },
        {
          "type":"web_url",
          "title":"Latest News",
          "url":"http://petershats.parseapp.com/hat-news",
          "webview_height_ratio":"full"
        }
      ]
    }
  ]
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=EAAB1iCN4ZA2EBANZBJelEVkPoj6IiKpKvaARiLpdQdd5jIU95v3ZCCYrFbi5oRtqeQg60vQ2czj7o9yGeCJLh4qJ7cSyNuBMjZBldZCHVDtTCghZAMn4skYsSZBwZCKOcMsZCr9Y8ZCzKoGtTJkEZCNNoW3qZAn2yHQGPkn0ZBz5qNYZBVigZDZD"