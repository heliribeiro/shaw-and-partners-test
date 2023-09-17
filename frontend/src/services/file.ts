// types
// services
import { API } from "./api";

/**
 * Function to fetch search results from the API.
 *
 * This function sends a GET request to the API with a specific search value and returns the results.
 *
 * @param {File} file - The file to be sent to the API.
 * @returns {Promise<>} A promise that resolves to void.
 *
 * @throws {Error} Throws an error in case there is an error in sending file to the API.
 */

export async function sendFile(file: File): Promise<void> {
  try {
    const endpoint: string = `/api/files`;

    const form = new FormData();
    form.append("my_file", file);
    await API.post(endpoint, form).then((res) => res.data);
  } catch (error) {
    throw new Error("Error in fetching search results");
  }
}
