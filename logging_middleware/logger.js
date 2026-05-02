// logging_middleware/logger.js

export const Log = async (stack, level, pkg, message) => {
    // Replace with the access_token you saved from Postman
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJiYW51cHJhZ2F0aGlAZ21haWwuY29tIiwiZXhwIjoxNzc3NzAwMTUxLCJpYXQiOjE3Nzc2OTkyNTEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxYTNhN2U1OS0xYTUyLTRhNjctODBmZS1kMWJhZTdjYzkyNDciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJiYW51IHByYWdhdGhpIiwic3ViIjoiNTU3ZWVlNjgtNDhmMy00MDI5LTk5NWQtMWExNDliMGE0MTRlIn0sImVtYWlsIjoiYmFudXByYWdhdGhpQGdtYWlsLmNvbSIsIm5hbWUiOiJiYW51IHByYWdhdGhpIiwicm9sbE5vIjoicmEyMzExMDI2MDIwMDg3IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNTU3ZWVlNjgtNDhmMy00MDI5LTk5NWQtMWExNDliMGE0MTRlIiwiY2xpZW50U2VjcmV0Ijoid0RTUkdyWWNnYU5hVVhWciJ9.K1z1jT4G4hBUtqnqKbp-mMNe-0TE9n6UjnmogwdsNfM"; 
    
    const logPayload = {
        stack: stack,   
        level: level,   
        package: pkg,  
        message: message
    };

    try {
        const response = await fetch('http://20.207.122.201/evaluation-service/logs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(logPayload)
        });
        
        if (response.ok) {
            console.log(`Log reported: ${message}`);
        }
    } catch (err) {
        // Silent fail for logger to prevent app crashes
        console.error("Logging service unreachable");
    }
};