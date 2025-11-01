
export const getCountries = async (fetchFlag) => {

    return new Promise(async (resolve, reject) => {
        fetchFlag(true);
        try {
            const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population");
            if (!res.ok) {
                reject({ success: false, data: [], error: "Error while fetching" });
                return;
            }

            const data = await res.json();
            const collator = new Intl.Collator("en");
            const list = data.map((c) => ({
                name: c.name.common ?? c.name.official ?? "Unknown",
                flag: c.flags.png || c.flags.svg || "",
                region: c.region || "Unknown",
                population: c.population ?? 0
            })).filter((x) => x.name).sort((a, b) => collator.compare(a.name, b.name));

            resolve({
                success: true,
                data: list,
                error: null
            })
        }
        catch (err) {
            reject({
                success: false,
                data: [],
                error: err.message || "Server error"
            })
        }
        finally {
            fetchFlag(false);
        }
    })
}


export const getCountry = async (fetchFlag, countryName, { fullText = false }) => {
    return new Promise(async (resolve, reject) => {
        fetchFlag(true);
        try {
            const encodedName = encodeURIComponent(countryName)
            const url =
                `https://restcountries.com/v3.1/name/${encodedName}?` +
                (fullText ? "fullText=true&" : "") +
                "fields=name,flags,capital,continents,region,subregion,timezones,languages,currencies,maps,population";

            const res = await fetch(url);
            //console.log(url);
            if (!res.ok) reject({ success: false, data: null, error: "Error while fetching" });

            const data = await res.json();
            const country = Array.isArray(data) ? data[0] : null;

            if (!country) {
                reject({ success: false, data: null, error: "Country not found" });
                return;
            }

            const normalized = {
                name: country.name.common || country.name.official || countryName,
                officialName: country.name.official || null,
                flagPng: country.flags.png || null,
                flagSvg: country.flags.svg || null,
                capital: country.capital?.[0] || "—",
                continent: country.continents?.[0] || "—",
                region: country.region || "—",
                subregion: country.subregion || "—",
                population: country.population ?? 0,
                timezones: country.timezones || [],
                languages: country.languages ? Object.values(country.languages) : [],
                currencies: country.currencies
                    ? Object.values(country.currencies).map((x) => x.name).filter(Boolean)
                    : [],
                mapGoogle: country.maps.googleMaps || null,
            };

            resolve({
                success: true,
                data: normalized,
                error: null
            })
        }
        catch (e) {
            reject({
                success: false,
                data: null,
                error: e.message
            })
        }
        finally {
            fetchFlag(false);
        }

    });
}
//testing
//getCountry("usa");