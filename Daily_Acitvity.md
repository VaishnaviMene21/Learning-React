                   Props   - 07/03/2024
Today i learn props props is nothing but adding additional information to jsx tag
to way we can do this 
1st way function Product(Props)
{
    console.log(props)
    return 
    <h1>{props.title}</h1>
}
at the time of rendering

<product title = "phone"/>
<product title = "Laptop"/>

2nd way destructuring
 1st way function Product({title})
{
    return 
    <h1>{title}</h1>
}



