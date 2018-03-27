let data = {
  ARBs : {
    valsartan : ["Valsacor, Valtensin, Diovan, Nortivan, Valsavil, Sarteg, Valsalen, Exforge, Wamlox, Vapress, Sartoval, Valstor, Suvartar"],
    telmisartan : ["Micardis, Telmisartan, Telmisartan/HCT, Telmitan, Telmotens, Telsart Teva, Teva, Tezeo, Tolucombi, Tolura, Twynsta"],
    losartan : ["Co-hypertonic, Lorista, Lozap, Rasoltan, Tores"],
    candesartan : ["Acrux, Atacand, Candecard, Cantab, Carzap, Repido"],
    olmesartan : ["Olmesta, Tensar, Tespadan"],
    irbesartan : ["Co-irbesso, Irbec, Irbesan, Irbesartan Accord, Irprezide"],
  },
  ACEs : {
    enalapril : ["Berlipril, Renapril, Renitec, Enahexal, Enap, Laprilen"],
    ramipril : ["Tritace, Vivace, Tamayra, Ramipril Teva, Ramimed, Ramihexal, Cardifriend"],
    lisinopril : ["Linipril, Cordacare, Dironorm, Diroton, Lisigama, Lisinopril Unifarm, Lizopril, Skopryl, Vitopril"],
    perindopril : ["Prestarium, Zaprinel, Stopress, Prenessa, Noliprel, Daxpamil Duo, Myden, Amlessa, Pontea"],
    benazepril : ["Cibadrex, Cordibenz plus"],
    fosinopril : ["Fosicard, Monopril, Monozide"],
    quinapril : ["Accupro, Accuzide, Corabace"],
    trandolapril : ["Gopten, Tarka, Tensotran"],
  },
  BetaBlockers : {
    bisoprolol : ["Concor, Concor Cor, Lodoz, Sobycombi, Blokbis, Bisostad, Bisor, Bisolen, Bisohexal, Biblok, Biprol, Coronal"],
    metoprolol : ["Corvitol, Egilok, Betaloc, Metaprolol Stada, Metostad, Succiprol, Betablokada"],
    nebivolol : ["Nebilet, Nevolen, Nebilan, Nebivolol Actavis, Nebivolol Teva, Nebicard, Cardiostad, Bravylol, Bivolet"],
    carvedilol : ["Dilatrend, Talliton, Coryol, Carvilex, Carvetrend, Carvedilol Medica, Carvedil, Carvedigamma, Avernol"],
  },
  CaBlockers : {
    amlodipin : ["Norvasc, Amloteron, Prestarium Co, Tenloris, Zaprinel A, Accel, Agen, Amlodigamma, Amlodipin Alkaloid, Amlodipin Medica, Amlopin, Amlovask, Caduet, Dironorm, Luxtanor, Neodipin, Sobycombi, Tamayra, Tenox, Tespadan, Vivace Duo"],
    nifedipin : ["Adalat, Cordaflex, Corinfar, Korincare"],
    lacidipin : ["Lacipil"],
    lercanidipin : ["Areta, Kapidin, Lecalpin, Renovia, Tevaler"],
    felodipin : ["Auronal, Felohexal, Plendil, Presid"],
    verapamil : ["Isoptin, Verogalid, Tarka, Actavis, Sofarma, 4aikafarma"],
    diltiazem : ["Aldizem, Actavis, 4aikafarma, Sofarma"],
  },
  Diuretics : {
    HCT :["Accuzide, Dehydratin neo, Dehydrazid, Diuretidin, Hypodehydra, Triampur compositum, Monozide"],
    Furosemide : ["Furanthril"],
    Torasemide : ["Trifas, Trifas cor, Torazidex, Torsit SR"],
    Spironolacton : ["Spironolacton Actavis, Spironolacton 4aikafarma"],
    Indapamid :["Tertenzif, Softenzif, Rawel, Pisizif, Neopamid SR, Neopamid, Indolen, Indipam, Daxpamil Duo, Co-Amlessa, Mivara, Alkaloid"],
    Triamteren : ["Diuretidin, Triampur Compositum"],
    Eplerenone : ["Carditrust"], 
  },
  Statins : {
    atorvastatin :  ["Amlator, Aragil, Atorgen, Atoris, Atorva, Atorvastatin Genericon, Atorvin, Atorvistat K, Avanor, Caduet, Luxtanor, Sortis, Torvacard, Torvalipin, Tulip"],
    simvastatin : ["Actalipid, Holesta, Neosimva, Simgal, Simvacor, Simvastatin Accord, Simvastatin Genericon, Simvastatin Medica, Vasilip, Zeplan, Zocor"],
    rosuvastatin : ["Crestor, Romasic, Rosistat, Rossta, Rosucard, Rosuvanor, Rosuvistat, Roswera, Rovasta, Suzastor, Tintaros, Zaranta, Zenon"],
    fluvastatin : ["Holetar, Lescol"],
    lovastatin : ["Medostatin"],  
  },
  Others : {
    clonidine :["Chlophazolin, Chlofadon (+chlorthalidone)"],
    Moxonidine :["Moxogama, Moxotens, Physiotens"],
    Rilmenidine : ["Tenaxum, Rilmenix"],
    Molsidomin : ["Molsidomin WZF"],
    Doxasosin : ["Cardura, Kamiren, Zoxon"],
    Isosorbiddinitrat : ["Isodinit, Isoket, Isoket spray, Kardiket retard"],
    Isosorbidmononitrat : ["Olicard, Neosorbid"],
    Tamsulozine : ["Omnic, Tamsol, Focusin, Tamsudil, Tanyz, Urimax, Vesomni, Duodart"],
  }
}

let asd = [];
let allDrugs = [];
let asd2 = Object.entries(data);
for([key, value] of asd2){
  asd.push(value);
}
asd.map(item => {
  allDrugs.push(...Object.keys(item));
});
