const resolveRoutes = (route) => {
  if (route != 'about'){
    if (route === '/'){
        return route
    }else if (route.length <= 3){
        return '/:id'
    }else if (route.includes('page')){
        return '/:pages'
    }
}
  return `/${route}`;
}

export default resolveRoutes;


//Explicación del resolve routes
//https://dev.to/alexcamachogz/creando-un-router-con-vanilla-javascript-27pl