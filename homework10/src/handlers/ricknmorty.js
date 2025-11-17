export const getAllChars = async (fetchFlag) => {
    return new Promise(async (resolve, reject) => {
        fetchFlag(true);
        try {
            const link = "https://rickandmortyapi.com/api/character";
            const res = await fetch(link);
            if (!res.ok) {
                return reject({ success: false, data: [], error: "Error while fetching" });
            }

            const data = await res.json();
            resolve({ success: true, data: data, message: "Data was pulled." })
        }
        catch (e) {
            reject({ success: false, data: [], error: e });
        }
        finally {
            fetchFlag(false);
        }
    })
}

export const getOneChar = async (name, fetchFlag) => {
    return new Promise(async (resolve, reject) => {
        fetchFlag(true);
        try {
            const link = `https://rickandmortyapi.com/api/character?name=${name}`;
            const res = await fetch(link);

            if (!res.ok) {
                return reject({
                    success: false,
                    data: null,
                    error: "Error while fetching character by ID",
                });
            }

            const data = await res.json();
            resolve({
                success: true,
                data,
                message: "Character was pulled.",
            });
        } catch (e) {
            reject({ success: false, data: null, error: e });
        } finally {
            fetchFlag(false);
        }
    });
};