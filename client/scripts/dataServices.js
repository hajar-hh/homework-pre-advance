const baseURL = "http://localhost:3000/member"; 

const getAllUser = async () => {
  try {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch faculty members.");
    }
    return await response.json(); 
  } catch (error) {
    console.error("Error in getAllUser:", error);
  }
};

const createUser = async (userData) => {
    try {
        const response = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error("Failed to create a new faculty member.");
        }

        const data = await response.json();
        return { data }; 
    } catch (error) {
        console.error("Error in createUser:", error);
        return { error }; 
    }
};


const deleteUser = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error("Failed to delete the faculty member.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in deleteUser:", error);
  }
};

export { getAllUser, deleteUser, createUser };
