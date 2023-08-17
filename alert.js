function copyToClipboard(inputId) {
    const input = document.getElementById(inputId);
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    swal({
        title: "copied",
        text: "address copied to clipboard",
        icon: "success",
        button: "OK",
    });
}