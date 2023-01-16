//
//  SetupJSI.hpp
//  RNBootSplash
//
//  Created by Ponikar Darshan janardan on 24/11/22.
//  Copyright © 2022 Facebook. All rights reserved.
//
#import <React/RCTBridgeModule.h>;

@interface SetupJSI : NSObject <RCTBridgeModule>;

@property (nonatomic, assign) BOOL setBridgeOnMainQueue;

@end
