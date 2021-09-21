//
//  BridgeModule.swift
//  SampleBridge
//
//  Created by Isuru Madusanka on 2021-09-20.
//

import Foundation

@objc(BridgeModule)
class BridgeModule: NSObject {
  
  @objc func fetchNewState(_ resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
    let isError = false
    
    if isError {
      reject(nil, "Could not receive the new status", nil)
    } else {
      resolve("Updated status")
    }
  }
  
}
