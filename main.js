// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var ime_api = chrome.input.ime;

var context_id = -1;

console.log("Initializing IME");

ime_api.onFocus.addListener(function(context) {
  console.log('onFocus:' + context.contextID);
  context_id = context.contextID;
});
ime_api.onBlur.addListener(function(contextID) {
  console.log('onBlur:' + contextID);
  context_id = -1;
});

ime_api.onActivate.addListener(function(engineID) {
  console.log('onActivate:' + engineID);
});
ime_api.onDeactivated.addListener(function(engineID) {
  console.log('onDeactivated:' + engineID);
});

ime_api.onKeyEvent.addListener(
function(engineID, keyData) {
  console.log('onKeyEvent:' + keyData.key + " context: " + context_id);
    if (keyData.type == "keydown") {
      
      var char_map = {
        "q":"ק",
        "w": "ש",
        "e": "ע",
        "r": "ר",
        "t": "ט",
        "y": "ײַ",
        "u": "ו",
        "i": "י",
        "o": "אָ",
        "p": "פּ",
        "[": "]",
        "]": "[",
        "Q": "כּ",
        "W": "שׂ",
        "E": "ײ",
        "R": "טש",
        "T": "תּ",
        "Y": "ױ",
        "U": "וּ",
        "I": "יִ",
        "P": "פ",
        "{": "“",
        "}": "„",
        
      };
      
        if (keyData.key.match(/^[qwertyuiop\[\]QWERTYUIOP{}]$/)) {
          chrome.input.ime.commitText({"contextID": context_id,
                                         "text": char_map[keyData.key]});
          return true;
        }
        else if (keyData.key.match(/^[asdfghjklASDFGHJKL]$/)) {
          if (keyData.key.match(/^a$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "אַ"});
            return true;
          }
          else if (keyData.key.match(/^A$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "א"});
            return true;
          }
          else if (keyData.key.match(/^s$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ס"});
            return true;
          }
          else if (keyData.key.match(/^S$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ת"});
            return true;
          }
          else if (keyData.key.match(/^d$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ד"});
            return true;
          }
          else if (keyData.key.match(/^D$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "דזש"});
            return true;
          }
          else if (keyData.key.match(/^f$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "פֿ"});
            return true;
          }
          else if (keyData.key.match(/^F$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ף"});
            return true;
          }
          else if (keyData.key.match(/^g$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ג"});
            return true;
          }
          else if (keyData.key.match(/^G$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "דזש"});
            return true;
          }
          else if (keyData.key.match(/^h$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ה"});
            return true;
          }
          else if (keyData.key.match(/^H$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ח"});
            return true;
          }
          else if (keyData.key.match(/^j$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ײ"});
            return true;
          }
          else if (keyData.key.match(/^J$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "דזש"});
            return true;
          }
          else if (keyData.key.match(/^k$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ק"});
            return true;
          }
          else if (keyData.key.match(/^K$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "כּ"});
            return true;
          }
          else if (keyData.key.match(/^[lL]$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ל"});
            return true;
          }
        }
        if (keyData.key.match(/^[zxcvbnmZXCVBNM\-_\|]$/)) {
          if (keyData.type == "keydown" && keyData.key.match(/^z$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ז"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^Z$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "זש"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^x$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "כ"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^X$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ך"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^c$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "צ"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^C$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ץ"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^v$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "װ"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^V$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "בֿ"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^b$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ב"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^B$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "בּ"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^n$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "נ"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^N$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ן"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^m$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "מ"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^M$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "ם"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^-$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "־"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^_$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "–"});
            return true;
          }
          else if (keyData.type == "keydown" && keyData.key.match(/^\|$/)) {
            chrome.input.ime.commitText({"contextID": context_id,
                                         "text": "—"});
            return true;
          }
        }
    }
//  else if (keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) {
//    chrome.input.ime.commitText({"contextID": context_id,
//                                 "text": keyData.key.toUpperCase()});
//    return true;
//  }

  return false
});
