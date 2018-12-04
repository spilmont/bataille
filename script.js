var Cartes=[
    {carte:"deux",value:2,symbole:"coeur",image:"images/2h.gif"},
    {carte:"trois",value:3,symbole:"coeur",image:"images/3h.gif"},
    {carte:"quatre",value:4,symbole:"coeur",image:"images/4h.gif"},
    {carte:"cinq",value:5,symbole:"coeur",image:"images/5h.gif"},
    {carte:"six",value:6,symbole:"coeur",image:"images/6h.gif"},
    {carte:"sept",value:7,symbole:"coeur",image:"images/7h.gif"},
    {carte:"huit",value:9,symbole:"coeur",image:"images/8h.gif"},
    {carte:"neuf",value:9,symbole:"coeur",image:"images/9h.gif"},
    {carte:"dix",value:10,symbole:"coeur",image:"images/10h.gif"},
    {carte:"valet",value:11,symbole:"coeur",image:"images/Jh.gif"},
    {carte:"dame",value:12,symbole:"coeur",image:"images/Qh.gif"},
    {carte:"roi",value:13,symbole:"coeur",image:"images/Kh.gif"},
    {carte:"as",value:14,symbole:"coeur",image:"images/Ah.gif"},

    {carte:"deux",value:2,symbole:"trefle",image:"images/2c.gif"},
    {carte:"trois",value:3,symbole:"trefle",image:"images/3c.gif"},
    {carte:"quatre",value:4,symbole:"trefle",image:"images/4c.gif"},
    {carte:"cinq",value:5,symbole:"trefle",image:"images/5c.gif"},
    {carte:"six",value:6,symbole:"trefle",image:"images/6c.gif"},
    {carte:"sept",value:7,symbole:"trefle",image:"images/7c.gif"},
    {carte:"huit",value:9,symbole:"trefle",image:"images/8c.gif"},
    {carte:"neuf",value:9,symbole:"trefle",image:"images/9c.gif"},
    {carte:"dix",value:10,symbole:"trefle",image:"images/10c.gif"},
    {carte:"valet",value:11,symbole:"trefle",image:"images/Jc.gif"},
    {carte:"dame",value:12,symbole:"trefle",image:"images/Qc.gif"},
    {carte:"roi",value:13,symbole:"trefle",image:"images/Kc.gif"},
    {carte:"as",value:14,symbole:"trefle",image:"images/Ac.gif"},

    {carte:"deux",value:2,symbole:"carreaux",image:"images/2d.gif"},
    {carte:"trois",value:3,symbole:"carreaux",image:"images/3d.gif"},
    {carte:"quatre",value:4,symbole:"carreaux",image:"images/4d.gif"},
    {carte:"cinq",value:5,symbole:"crreaux",image:"images/5d.gif"},
    {carte:"six",value:6,symbole:"carreaux",image:"images/6d.gif"},
    {carte:"sept",value:7,symbole:"carreaux",image:"images/7d.gif"},
    {carte:"huit",value:9,symbole:"carreaux",image:"images/8d.gif"},
    {carte:"neuf",value:9,symbole:"carreaux",image:"images/9d.gif"},
    {carte:"dix",value:10,symbole:"carreaux",image:"images/10d.gif"},
    {carte:"valet",value:11,symbole:"carreaux",image:"images/Jd.gif"},
    {carte:"dame",value:12,symbole:"carreaux",image:"images/Qd.gif"},
    {carte:"roi",value:13,symbole:"carreaux",image:"images/Kd.gif"},
    {carte:"as",value:14,symbole:"carreaux",image:"images/Ad.gif"},

    {carte:"deux",value:2,symbole:"pique",image:"images/2s.gif"},
    {carte:"trois",value:3,symbole:"pique",image:"images/3s.gif"},
    {carte:"quatre",value:4,symbole:"pique",image:"images/4s.gif"},
    {carte:"cinq",value:5,symbole:"pique",image:"images/5s.gif"},
    {carte:"six",value:6,symbole:"pique",image:"images/6s.gif"},
    {carte:"sept",value:7,symbole:"pique",image:"images/7s.gif"},
    {carte:"huit",value:9,symbole:"pique",image:"images/8s.gif"},
    {carte:"neuf",value:9,symbole:"pique",image:"images/9s.gif"},
    {carte:"dix",value:10,symbole:"pique",image:"images/10s.gif"},
    {carte:"valet",value:11,symbole:"pique",image:"images/Js.gif"},
    {carte:"dame",value:12,symbole:"pique",image:"images/Qs.gif"},
    {carte:"roi",value:13,symbole:"pique",image:"images/Ks.gif"},
    {carte:"as",value:14,symbole:"pique",image:"images/As.gif"},

    ];

var dos;
var scorejoueur =0;
var scoreordi =0;





    $("#bataille").click(function(){

        for(let i=0;i<Cartes.length;i++){

        var alea = Math.floor(Math.random()*Cartes.length);
        var alea2 = Math.floor(Math.random()*Cartes.length);

        $("#carteJoueur").html("<img src='"+Cartes[alea].image+"'>");
        $("#carteOrdi").html("<img src='"+Cartes[alea2].image+"'>");
        }
        if (Cartes[alea].value > Cartes[alea2].value ){
            scorejoueur++;
        }
        if (Cartes[alea].value < Cartes[alea2].value ){
            scoreordi++;
        }

        Cartes.splice(alea,1);
        Cartes.splice(alea2,1);

        $("#scoreJoueur").html("joueur : "+scorejoueur);
        $("#scoreOrdi").html("ordi : "+scoreordi);

        if(Cartes.length ==0){
            $("#plateau").hide();
            $("#score").show();
        }else{
            $("#plateau").show();
            $("#score").hide();
        }

    });



