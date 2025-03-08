mergeInto(LibraryManager.library, {
    PiInitJS: function() {
        if (typeof Pi === "undefined") {
            console.error("❌ Pi SDK 尚未載入，請檢查是否正確加載");
            return;
        }

        // Pi SDK 初始化（請填入你的 App ID）
        Pi.init({ version: "2.0", sandbox: true })
            .then(() => {
                console.log("✅ Pi SDK 初始化成功！");
                SendMessage("GameManager", "OnPiInitSuccess", "Pi SDK 初始化成功");
            })
            .catch(error => {
                console.error("❌ Pi SDK 初始化失敗:", error);
                SendMessage("GameManager", "OnPiInitFail", error.message);
            });
    }
});
