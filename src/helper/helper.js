export const createVenueObject = (formData) => {
  return {
    title: formData.venueName,
    address: formData.address,
    latitude: formData.latitude,
    longitude: formData.longitude,
    capacity: formData.capacity,
    price: formData.price,
    rating: 0,
    size: formData.size,
    description: formData.description,
    features: formData.features
      .filter((feature) => feature.checked)
      .map((feature) => feature.name),
    eventTypes: formData.eventTypes
      .filter((eventType) => eventType.checked)
      .map((eventType) => eventType.name),
    placeType: formData.placeType,
    services: [], 
  };
};

export const createAccountObject = (formData) => {
  return {
    userName: formData.userName,
    email: formData.email,
    password: formData.password,
    phoneNumber: formData.phoneNumber,
  };
}

export const createEmployeeObject = (formData) => {
  return {
    name: formData.userName,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    address: formData.address,
    accout:{}
  };
}
