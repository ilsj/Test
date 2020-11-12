function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (host ==  "94.79.54.123")
        return "PROXY 185.185.71.8:11488";

    // by default use no proxy
    return "DIRECT";
}
