export const createVenueObject = (formData) => {
    return {
      id: Date.now(), 
      title: formData.venueName,
      img: formData.imgVenue, 
      images: [formData.bigImage, formData.smallImage1, formData.smallImage2, formData.smallImage3], 
      address: formData.address,
      coordinates: {
        latitude: formData.latitude,
        longitude: formData.longitude,
      },
      capacity: formData.capacity,
      price: formData.price,
      rating: 0, 
      size: formData.size,
      description: formData.description,
      features: formData.features.filter(feature => feature.checked).map(feature => feature.name),
      eventTypes: formData.eventTypes.filter(eventType => eventType.checked).map(eventType => eventType.name),
      placeType: formData.placeType,
      services: [], 
      author: {
      },
    };
  };