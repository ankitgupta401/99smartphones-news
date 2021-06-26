
export const  fetchWithTimeout = async (resource, options)  => {
    const { timeout = 30000 } = options;
    
    return Promise.race([
        fetch(resource, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), timeout)
        )
    ]);

  }

