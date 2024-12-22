export const jwtDecode = (token: string): any => {
    try {
      const base64Url = token.split('.')[1]; // Get the payload (middle part of the JWT)
      const base64 = base64Url.replace('-', '+').replace('_', '/'); // Convert Base64Url to Base64
      const decoded = JSON.parse(atob(base64)); // Decode Base64 to JSON object
      return decoded;
    } catch (error) {
      console.error("Invalid token format", error);
      return null;
    }
  };
  