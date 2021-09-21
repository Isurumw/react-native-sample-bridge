package com.samplebridge;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class BridgeModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "BridgeModule";

    BridgeModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void fetchNewState(Promise promise) {
        boolean isError = false;

        if (isError) {
            promise.reject(new Error("Could not receive the new status"));
        } else {
            promise.resolve("Updated status");
        }
    }
}
