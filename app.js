const app = new Vue ({
    el:'#app', //para relacionar con el html
    data: {
        titulo: 'Lista de Restaurantes',
        restaurantes: [],
        newRestaurante: '' //cuando escribimos en el imput se cargará aqui y luego al array de arriba
    },
    methods: {
        add: function (){
            this.restaurantes.push ({
                nombre: this.newRestaurante,
            });
            this.newRestaurante = ''
        },
        borrar: function  (index){
           this.restaurantes.splice(index, 1)
       } 
    }                    
    })