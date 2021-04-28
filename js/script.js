var app= new Vue(
    {
        el:'#root',
        data:{
            cds:[]

        },
        methods:{

        },
        mounted(){

            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then( (response) => {
                    const result = response.data;

                    this.cds = result.response;
                    console.log(this.cds);
                });
                
        }
    }

);