
const RateDeleteVM = () => {
    async function rateToServer(rating: number, id: string) {
        try {
          console.log("Starting fetch...");
          const response = await fetch(
            `http://localhost:3000/api/heroes/${id}/rate`,
            {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json", 
              },
              body: JSON.stringify({ rating }),
            }
          );
    
          if (!response.ok) {
            if(response.status===20)
            {console.log("player already rated")}
            throw new Error("Failed to rate player");
          }
    
          const data = await response.json();
          const {message} = data;
          console.log( message);
        } catch (error) {
          console.error("Error rating player:", error);
        }
      }

      async function deleteToServer( id: string) {
        try {
          console.log("Starting deletion...");
          const response = await fetch(
            `http://localhost:3000/api/heroes/delete/${id}`,
            {
              method: "DELETE",
              credentials: "include",
            }
          );
    
          if (!response.ok) {
          
            throw new Error("Failed to delete player");
          }
    
          const data = await response.json();
          const {message} = data;
          console.log( message);
        } catch (error) {
          console.error("Error deleting player:", error);
        }
      }

  return (
    {rateToServer,deleteToServer}
  )
}

export default RateDeleteVM
