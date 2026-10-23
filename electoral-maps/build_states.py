# Build yearly State-assembly snapshots (ST) for 2004-2026: seats from each state's latest election up to 31 Dec,
# parties grouped by their alliance that year: [bjp, nda allies, not aligned, Congress allies, inc].
import json, sys
DM = json.load(open(sys.argv[1]))  # DataMeet per-election party totals (elections 2000-2013)

NAME = {"Andhra Pradesh":"AP","Arunachal Pradesh":"AR","Assam":"AS","Bihar":"BR","Chhattisgarh":"CG","Delhi":"DL",
 "Goa":"GA","Gujarat":"GJ","Haryana":"HR","Himachal Pradesh":"HP","Jammu & Kashmir":"JK","Jharkhand":"JH",
 "Karnataka":"KA","Kerala":"KL","Madhya Pradesh":"MP","Maharashtra":"MH","Manipur":"MN","Meghalaya":"ML",
 "Mizoram":"MZ","Nagaland":"NL","Orissa":"OD","Pondicherry":"PY","Punjab":"PB","Rajasthan":"RJ","Sikkim":"SK",
 "Tamil Nadu":"TN","Tripura":"TR","Uttar Pradesh":"UP","Uttarakhand":"UK","West Bengal":"WB"}
NORM = {"CPI(M)":"CPM","AUDF":"AIUDF","BOPF":"BPF","AJSUP":"AJSU","JKN":"NC","JKPDP":"PDP","MUL":"IUML","SHS":"SS",
 "ADMK":"AIADMK","MAG":"MGP","FBL":"AIFB","KEC(M)":"KCM","KEC(J)":"KCJ","KEC(B)":"KCB","CPI(ML)(L)":"CPIML",
 "PRAP":"PRP","HJCBL":"HJC","SAP":"JDU","JD(U)":"JDU","JD(S)":"JDS","TMC(M)":"INC_TMCM"}

E = {}  # state -> [(year, {party: seats})]
for k, v in DM.items():
    st, y = k.split("|"); code = NAME[st]
    if y == "feb2005": continue          # hung, dissolved unconvened; Oct 2005 is the one
    yr = 2005 if y == "oct2005" else int(y)
    p = {}
    for a, n in v.items(): a = NORM.get(a, a); p[a] = p.get(a, 0) + n
    E.setdefault(code, []).append((yr, p))
# patches for the one AC missing in DataMeet (as in the 2026-10-09 build)
for code, yr, party in [("PB",2007,"SAD"),("RJ",2013,"BJP"),("UK",2007,"IND")]:
    for y, p in E[code]:
        if y == yr: p[party] = p.get(party, 0) + 1

# Elections from 2012 Gujarat and 2014 on (official party totals; Wikipedia for the ones checked 2026-10-23)
T = {
 "GJ": [(2012,{"BJP":115,"INC":61,"GPP":2,"NCP":2,"JDU":1,"IND":1}),(2017,{"BJP":99,"INC":77,"BTP":2,"NCP":1,"IND":3}),
        (2022,{"BJP":156,"INC":17,"AAP":5,"SP":1,"IND":3})],
 "AP": [(2014,{"TDP":102,"YSRCP":67,"BJP":4,"NSP":1,"IND":1}),(2019,{"YSRCP":151,"TDP":23,"JSP":1}),
        (2024,{"TDP":135,"JSP":21,"BJP":8,"YSRCP":11})],
 "TS": [(2014,{"TRS":63,"INC":21,"TDP":15,"AIMIM":7,"BJP":5,"YSRCP":3,"BSP":2,"CPI":1,"CPM":1,"IND":1}),
        (2018,{"TRS":88,"INC":19,"AIMIM":7,"TDP":2,"BJP":1,"AIFB":1,"IND":1}),(2023,{"INC":64,"BRS":39,"BJP":8,"AIMIM":7,"CPI":1})],
 "AR": [(2014,{"INC":42,"BJP":11,"PPA":5,"IND":2}),(2019,{"BJP":41,"JDU":7,"NPP":5,"INC":4,"PPA":1,"IND":2}),
        (2024,{"BJP":46,"NPP":5,"NCP":3,"PPA":2,"INC":1,"IND":3})],
 "AS": [(2016,{"BJP":60,"AGP":14,"BPF":12,"INC":26,"AIUDF":13,"IND":1}),
        (2021,{"BJP":60,"AGP":9,"UPPL":6,"INC":29,"AIUDF":16,"BPF":4,"CPM":1,"IND":1}),
        (2026,{"BJP":82,"AGP":10,"BPF":10,"INC":19,"RD":2,"AIUDF":2,"AITC":1})],
 "BR": [(2015,{"RJD":80,"JDU":71,"BJP":53,"INC":27,"LJP":2,"RLSP":2,"HAM":1,"CPIML":3,"IND":4}),
        (2020,{"RJD":75,"BJP":74,"JDU":43,"INC":19,"CPIML":12,"AIMIM":5,"HAM":4,"VIP":4,"CPI":2,"CPM":2,"BSP":1,"LJP":1,"IND":1}),
        (2025,{"BJP":89,"JDU":85,"LJP":19,"HAM":5,"RLM":4,"RJD":25,"INC":6,"CPIML":2,"CPM":1,"IIP":1,"AIMIM":5,"BSP":1})],
 "CG": [(2018,{"INC":68,"BJP":15,"JCCJ":5,"BSP":2}),(2023,{"BJP":54,"INC":35,"GGP":1})],
 "DL": [(2015,{"AAP":67,"BJP":3}),(2020,{"AAP":62,"BJP":8}),(2025,{"BJP":48,"AAP":22})],
 "GA": [(2017,{"INC":17,"BJP":13,"MGP":3,"GFP":3,"NCP":1,"IND":3}),(2022,{"BJP":20,"INC":11,"MGP":2,"AAP":2,"GFP":1,"RGP":1,"IND":3})],
 "HR": [(2014,{"BJP":47,"INLD":19,"INC":15,"HJC":2,"BSP":1,"SAD":1,"IND":5}),(2019,{"BJP":40,"INC":31,"JJP":10,"INLD":1,"HLP":1,"IND":7}),
        (2024,{"BJP":48,"INC":37,"INLD":2,"IND":3})],
 "HP": [(2017,{"BJP":44,"INC":21,"CPM":1,"IND":2}),(2022,{"INC":40,"BJP":25,"IND":3})],
 "JK": [(2014,{"PDP":28,"BJP":25,"NC":15,"INC":12,"JKPC":2,"CPM":1,"JKPDF":1,"IND":3}),
        (2024,{"NC":42,"BJP":29,"INC":6,"PDP":3,"JKPC":1,"CPM":1,"AAP":1,"IND":7})],
 "JH": [(2014,{"BJP":37,"JMM":19,"JVM":8,"INC":6,"AJSU":5,"BSP":1,"CPIML":1,"MCC":1,"JBSP":1,"JSP":1,"IND":1}),
        (2019,{"JMM":30,"BJP":25,"INC":16,"JVM":3,"AJSU":2,"RJD":1,"CPIML":1,"NCP":1,"IND":2}),
        (2024,{"JMM":34,"BJP":21,"INC":16,"RJD":4,"CPIML":2,"AJSU":1,"LJP":1,"JDU":1,"JLKM":1})],
 "KA": [(2018,{"BJP":104,"INC":80,"JDS":37,"BSP":1,"KPJP":1,"IND":1}),(2023,{"INC":135,"BJP":66,"JDS":19,"SKP":1,"KRPP":1,"IND":2})],
 "KL": [(2016,{"LDF":91,"INC":22,"IUML":18,"KCM":6,"KCJ":1,"BJP":1,"IND":1}),
        (2021,{"LDF":99,"INC":22,"IUML":15,"KC":2,"KCJ":1,"RMPI":1}),(2026,{"BJP":3,"LDF":35,"UDF":39,"INC":63})],
 "MP": [(2018,{"INC":114,"BJP":109,"BSP":2,"SP":1,"IND":4}),(2023,{"BJP":163,"INC":66,"BAP":1})],
 "MH": [(2014,{"BJP":122,"SS":63,"INC":42,"NCP":41,"PWPI":3,"BVA":3,"AIMIM":2,"MNS":1,"RSPS":1,"SP":1,"CPM":1,"BBM":1,"IND":7}),
        (2019,{"BJP":105,"SS":56,"NCP":54,"INC":44,"BVA":3,"AIMIM":2,"SP":2,"PJP":2,"MNS":1,"CPM":1,"PWPI":1,"SWP":1,"JSS":1,"KSP":1,"RSPS":1,"IND":13}),
        (2024,{"BJP":132,"SS":57,"NCP":41,"SSUBT":20,"INC":16,"NCPSP":10,"SP":2,"JSS":2,"AIMIM":1,"CPM":1,"PWPI":1,"RSVA":1,"RYSP":1,"IND":2})],
 "MN": [(2017,{"INC":28,"BJP":21,"NPF":4,"NPP":4,"LJP":1,"AITC":1,"IND":1}),(2022,{"BJP":32,"NPP":7,"JDU":6,"NPF":5,"INC":5,"KPA":2,"IND":3})],
 "ML": [(2018,{"INC":21,"NPP":20,"UDP":6,"PDF":4,"HSPDP":2,"BJP":2,"NCP":1,"KHNAM":1,"IND":3}),
        (2023,{"NPP":26,"UDP":12,"AITC":5,"INC":5,"VPP":4,"BJP":2,"HSPDP":2,"PDF":2,"IND":2})],
 "MZ": [(2018,{"MNF":26,"ZPM":8,"INC":5,"BJP":1}),(2023,{"ZPM":27,"MNF":10,"BJP":2,"INC":1})],
 "NL": [(2018,{"NPF":26,"NDPP":18,"BJP":12,"NPP":2,"JDU":1,"IND":1}),
        (2023,{"NDPP":25,"BJP":12,"NCP":7,"NPP":5,"LJP":2,"NPF":2,"RPIA":2,"JDU":1,"IND":4})],
 "OD": [(2014,{"BJD":117,"INC":16,"BJP":10,"SKD":1,"CPM":1,"IND":2}),(2019,{"BJD":112,"BJP":23,"INC":9,"CPM":1,"IND":2}),
        (2024,{"BJP":78,"BJD":51,"INC":14,"CPM":1,"IND":3})],
 "PY": [(2016,{"INC":15,"AINRC":8,"AIADMK":4,"DMK":2,"IND":1}),(2021,{"AINRC":10,"BJP":6,"DMK":6,"INC":2,"IND":6}),
        (2026,{"AINRC":12,"BJP":4,"LJK":1,"AIADMK":1,"DMK":5,"INC":1,"TVK":2,"NMK":1,"IND":3})],
 "PB": [(2017,{"INC":77,"AAP":20,"SAD":15,"BJP":3,"LIP":2}),(2022,{"AAP":92,"INC":18,"SAD":3,"BJP":2,"BSP":1,"IND":1})],
 "RJ": [(2018,{"INC":100,"BJP":73,"BSP":6,"RLP":3,"CPM":2,"BTP":2,"RLD":1,"IND":13}),
        (2023,{"BJP":115,"INC":69,"BAP":3,"BSP":2,"RLD":1,"RLP":1,"IND":8})],   # Karanpur polled Jan 2024 (INC)
 "SK": [(2014,{"SDF":22,"SKM":10}),(2019,{"SKM":17,"SDF":15}),(2024,{"SKM":31,"SDF":1})],
 "TN": [(2016,{"AIADMK":136,"DMK":89,"INC":8,"IUML":1}),
        (2021,{"DMK":133,"INC":18,"VCK":4,"CPI":2,"CPM":2,"AIADMK":66,"PMK":5,"BJP":4}),
        (2026,{"TVK":108,"DMK":59,"SPA":9,"INC":5,"AIADMK":47,"NDAX":5,"BJP":1})],
 "TR": [(2018,{"BJP":36,"IPFT":8,"CPM":16}),(2023,{"BJP":32,"IPFT":1,"TMP":13,"CPM":11,"INC":3})],
 "UP": [(2017,{"BJP":312,"ADS":9,"SBSP":4,"SP":47,"BSP":19,"INC":7,"RLD":1,"NISHAD":1,"IND":3}),
        (2022,{"BJP":255,"ADS":12,"NISHAD":6,"SP":111,"RLD":8,"SBSP":6,"INC":2,"JDL":2,"BSP":1})],
 "UK": [(2017,{"BJP":57,"INC":11,"IND":2}),(2022,{"BJP":47,"INC":19,"BSP":2,"IND":2})],
 "WB": [(2016,{"AITC":211,"INC":44,"CPM":26,"BJP":3,"RSP":3,"GJM":3,"AIFB":2,"CPI":1,"IND":1}),
        (2021,{"AITC":215,"BGPM":1,"BJP":77,"ISF":1}),
        (2026,{"BJP":208,"AITC":80,"CPM":1,"AJUP":2,"ISF":1,"INC":2})],
}
for code, lst in T.items(): E.setdefault(code, []).extend(lst)
for code in E: E[code].sort(key=lambda t: t[0])

def R(*spans):  # set of years from (a,b) inclusive spans; (a,) = a..2026
    s = set()
    for sp in spans: s |= set(range(sp[0], (sp[1] if len(sp) > 1 else 2026) + 1))
    return s
LEFT = {"CPM","CPI","CPIML","AIFB","RSP","SUCI","LDF","RSPKB","KRSP","CMPKSC","MCO","MCC"}
# NDA allies by year
NDA = {
 "SS":R((2004,2018),(2022,)),"SAD":R((2004,2019)),"JDU":R((2004,2012),(2017,2021),(2024,)),"TDP":R((2004,2004),(2014,2017),(2024,)),
 "AIADMK":R((2004,2004),(2019,2022),(2025,)),"BJD":R((2004,2008)),"AGP":R((2009,2010),(2016,)),"BPF":R((2016,2019),(2026,)),
 "MNF":R((2004,2008),(2016,)),"NPF":R((2004,2008),(2014,)),"NDPP":R((2018,)),"NPP":R((2014,)),"LJP":R((2014,)),
 "RLSP":R((2014,2017)),"HAM":R((2015,2017),(2020,2021),(2023,)),"VIP":R((2020,2021)),"RLP":R((2019,2019)),
 "RLD":R((2009,2010),(2024,)),"ADS":R((2014,)),"AD":R((2014,)),"SBSP":R((2017,2018),(2023,)),"NISHAD":R((2022,)),
 "DMDK":R((2014,2015)),"PMK":R((2014,2015),(2021,)),"TRS":R((2009,2009)),"IPFT":R((2018,)),"TMP":R((2024,)),
 "AJSU":R((2014,)),"JJP":R((2019,2023)),"HJC":R((2011,2013)),"MGP":R((2017,2018),(2022,)),"GFP":R((2017,2018)),
 "SKM":R((2019,)),"AINRC":R((2014,)),"PDP":R((2015,2017)),"JKPC":R((2015,2017)),"AITC":R((2004,2005)),
 "NCP":R((2023,)),"JDS":R((2023,)),"RPIA":R((2014,)),"LJK":R((2026,)),"RLM":R((2025,)),"NDAX":R((2026,)),
 "UPPL":R((2021,)),"KPA":R((2022,2022)),"INLD":R((2009,2009)),"RSPS":R((2014,)),"JSP":R((2020,)),
}
# Congress allies (UPA to 2022, INDIA from 2023) by year
UPA = {
 "NCP":R((2004,2022)),"RJD":R((2004,2008),(2014,)),"LJP":R((2004,2008)),"JMM":R((2004,2009),(2013,)),"DMK":R((2004,2012),(2016,)),
 "PMK":R((2004,2008)),"MDMK":R((2004,2005)),"TRS":R((2004,2005)),"AIMIM":R((2004,2011)),"PDP":R((2004,2007),(2023,)),
 "NC":R((2009,)),"AITC":R((2009,2011),(2023,)),"RLD":R((2011,2017),(2023,2023)),"JDU":R((2015,2016),(2022,2023)),
 "SS":R((2019,2021)),"JDS":R((2018,2019)),"IUML":R((2004,)),"KCM":R((2004,2015),(2018,2019),(2023,)),"KCJ":R((2004,)),
 "SJD":R((2004,)),"KCB":R((2004,2015)),"RSP_KL":R((2014,)),"KC":R((2004,)),"RMPI":R((2021,)),"UDF":R((2004,)),
 "VCK":R((2004,)),"RLSP":R((2018,2020)),"HAM":R((2018,2019),(2022,2022)),"VIP":R((2024,)),"BPF":R((2020,2022)),
 "GFP":R((2022,)),"AAP":R((2023,2024)),"SP":R((2023,)),"BAP":R((2024,)),"RLP":R((2024,2024)),"SPA":R((2004,)),
 "RD":R((2023,)),"SSUBT":R((2023,)),"NCPSP":R((2023,)),"IIP":R((2023,)),"JKNPP":set(),"BGPM":R((2023,)),
}
def group(y, party, code):
    if party == "BJP": return 0
    if party == "INC" or party == "INC_TMCM" or (party == "PRP" and y >= 2011): return 4
    if party in LEFT and y >= 2023: return 3
    if party == "RSP" and code == "KL" and y >= 2014: return 3
    if party in NDA and y in NDA[party]: return 1
    if party in UPA and y in UPA[party]: return 3
    return 2

# Sitting assembly at 31 Dec (None = dissolved / no legislature); later defections and by-elections ignored
def snapshot(y):
    out = {}
    for code, lst in E.items():
        el = [t for t in lst if t[0] <= y]
        if not el: continue
        ey, p = el[-1]
        if code == "AP" and y >= 2014 and ey < 2014: continue   # undivided AP ends 2014
        g = [0]*5
        for party, n in p.items():
            # Maharashtra 2019 assembly after the splits: Shiv Sena 40 Shinde (NDA) / 16 Thackeray; NCP 2023: 41 Ajit / 13 Sharad
            if code == "MH" and ey == 2019 and party == "SS" and y >= 2022: g[1] += 40; g[3] += 16; continue
            if code == "MH" and ey == 2019 and party == "NCP" and y >= 2023: g[1] += 41; g[3] += 13; continue
            g[group(y, party, code)] += n
        out[code] = g
    if y < 2014: out.pop("TS", None)
    if y == 2014: out["DL"] = None
    if 2018 <= y <= 2023: out["JK"] = None
    if y >= 2019: out["LA"] = None
    for k in ["CH","DD","LD","AN"]: out[k] = None
    return out

res = {y: snapshot(y) for y in range(2004, 2027)}
json.dump(res, open(sys.argv[2], "w"))

# Chief minister's group at 31 Dec (2026: October). Spans: (from, to, group); a year with no span = President's /
# Governor's rule or no assembly (left out). Groups follow the CM's party alliance that year, as in ST.
CMS = {
 "AP":[(2004,2013,"inc"),(2014,2017,"nda"),(2018,2023,"oth"),(2024,2026,"nda")],
 "TS":[(2014,2022,"oth"),(2023,2026,"inc")],
 "AR":[(2004,2015,"inc"),(2016,2026,"bjp")],
 "AS":[(2004,2015,"inc"),(2016,2026,"bjp")],
 "BR":[(2004,2004,"india"),(2005,2012,"nda"),(2013,2014,"oth"),(2015,2016,"india"),(2017,2021,"nda"),(2022,2023,"india"),(2024,2025,"nda"),(2026,2026,"bjp")],
 "CG":[(2004,2017,"bjp"),(2018,2022,"inc"),(2023,2026,"bjp")],
 "DL":[(2004,2012,"inc"),(2013,2013,"oth"),(2015,2022,"oth"),(2023,2024,"india"),(2025,2026,"bjp")],
 "GA":[(2004,2004,"bjp"),(2005,2011,"inc"),(2012,2026,"bjp")],
 "GJ":[(2004,2026,"bjp")],
 "HR":[(2004,2004,"oth"),(2005,2013,"inc"),(2014,2026,"bjp")],
 "HP":[(2004,2006,"inc"),(2007,2011,"bjp"),(2012,2016,"inc"),(2017,2021,"bjp"),(2022,2026,"inc")],
 "JK":[(2004,2004,"india"),(2005,2007,"inc"),(2009,2014,"india"),(2015,2017,"nda"),(2024,2026,"india")],
 "JH":[(2004,2005,"bjp"),(2006,2009,"india"),(2010,2012,"bjp"),(2013,2013,"india"),(2014,2018,"bjp"),(2019,2026,"india")],
 "KA":[(2004,2005,"inc"),(2006,2006,"oth"),(2008,2012,"bjp"),(2013,2017,"inc"),(2018,2018,"india"),(2019,2022,"bjp"),(2023,2026,"inc")],
 "KL":[(2004,2005,"inc"),(2006,2010,"oth"),(2011,2015,"inc"),(2016,2022,"oth"),(2023,2025,"india"),(2026,2026,"inc")],
 "MP":[(2004,2017,"bjp"),(2018,2019,"inc"),(2020,2026,"bjp")],
 "MH":[(2004,2013,"inc"),(2014,2018,"bjp"),(2019,2021,"india"),(2022,2023,"nda"),(2024,2026,"bjp")],
 "MN":[(2004,2016,"inc"),(2017,2024,"bjp"),(2026,2026,"bjp")],
 "ML":[(2004,2007,"inc"),(2008,2008,"oth"),(2009,2017,"inc"),(2018,2026,"nda")],
 "MZ":[(2004,2007,"nda"),(2008,2017,"inc"),(2018,2022,"nda"),(2023,2026,"oth")],
 "NL":[(2004,2008,"nda"),(2009,2013,"oth"),(2014,2026,"nda")],
 "OD":[(2004,2008,"nda"),(2009,2023,"oth"),(2024,2026,"bjp")],
 "PY":[(2004,2010,"inc"),(2011,2013,"oth"),(2014,2015,"nda"),(2016,2020,"inc"),(2021,2026,"nda")],
 "PB":[(2004,2006,"inc"),(2007,2016,"nda"),(2017,2021,"inc"),(2022,2022,"oth"),(2023,2024,"india"),(2025,2026,"oth")],
 "RJ":[(2004,2007,"bjp"),(2008,2012,"inc"),(2013,2017,"bjp"),(2018,2022,"inc"),(2023,2026,"bjp")],
 "SK":[(2004,2018,"oth"),(2019,2026,"nda")],
 "TN":[(2004,2004,"nda"),(2005,2005,"oth"),(2006,2010,"india"),(2011,2018,"oth"),(2019,2020,"nda"),(2021,2025,"india"),(2026,2026,"oth")],
 "TR":[(2004,2017,"oth"),(2018,2026,"bjp")],
 "UP":[(2004,2016,"oth"),(2017,2026,"bjp")],
 "UK":[(2004,2006,"inc"),(2007,2011,"bjp"),(2012,2016,"inc"),(2017,2026,"bjp")],
 "WB":[(2004,2010,"oth"),(2011,2011,"india"),(2012,2022,"oth"),(2023,2025,"india"),(2026,2026,"bjp")],
}
cm = {y:{k:g for k,sp in CMS.items() for a,b,g in sp if a<=y<=b} for y in range(2004,2027)}
json.dump(cm, open(sys.argv[2].replace(".json","_cm.json"),"w"))
