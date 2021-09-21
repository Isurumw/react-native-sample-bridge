//
//  BridgeModule.m
//  SampleBridge
//
//  Created by Isuru Madusanka on 2021-09-20.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(BridgeModule, NSObject)
RCT_EXTERN_METHOD(fetchNewState: (RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
@end
