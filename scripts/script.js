// Service data
let services_class=["URL_I" ,"URL_II" ,"URL_III" ];
let services_path =["URL_I/","URL_II/","URL_III/"];
let services_auth =["Og=="  ,"Og=="   ,"Og=="    ];

// Specific URL for different agents
let link = document.querySelector("URL_III");
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    link.href = "";
    link.innerText = "";
}
else if (/(Android)/i.test(navigator.userAgent)) {
    link.href = "---://";
    link.innerText = "Navidrome (--- client)"
}

// Call stat()
stat(document, services_class, services_path, services_auth);

// Allocate button
document.querySelector('button').onclick = function() {
    stat(document, services_class, services_path, services_auth);
}
