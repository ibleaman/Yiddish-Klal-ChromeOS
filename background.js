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
    if (keyData.type == "keydown" && keyData.code != "ControlLeft" && keyData.code != "ControlRight") {
      
      if (keyData.key.match(/^[qwertyuiop\[\]QWERTYUIOP{}asdfghjklASDFGHJKLzxcvbnmZXCVBNM\-_\|]$/)) {
        
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
        "a": "אַ",
        "s": "ס",
        "d": "ד",
        "f": "פֿ",
        "g": "ג",
        "h": "ה",
        "j": "ײ",
        "k": "ק",
        "l": "ל",
        "A": "א",
        "S": "ת",
        "D": "דזש",
        "F": "ף",
        "G": "דזש",
        "H": "ח",
        "J": "דזש",
        "K": "כּ",
        "L": "ל",
        "z": "ז",
        "x": "כ",
        "c": "צ",
        "v": "װ",
        "b": "ב",
        "n": "נ",
        "m": "מ",
        "Z": "זש",
        "X": "ך",
        "C": "ץ",
        "V": "בֿ",
        "B": "בּ",
        "N": "ן",
        "M": "ם",
        "-": "־",
        "_": "–",
        "|": "—",
      };
        
        chrome.input.ime.commitText({"contextID": context_id,
                                       "text": char_map[keyData.key]});
        return true;
      }
    }

  return false
});

// In service workers, we need to keep the service worker alive
// This ensures the IME functions continuously
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// For IME extensions, we need to keep the service worker alive
// This is considered an "exceptional case" as mentioned in the migration guide
let heartbeatInterval;

async function runHeartbeat() {
  // A simple API call to keep the service worker active
  chrome.runtime.getPlatformInfo(() => {});
}

// Start the heartbeat immediately since an IME needs to be always available
heartbeatInterval = setInterval(runHeartbeat, 20 * 1000); // every 20 seconds