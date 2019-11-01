# Test Falabella Dev
Proyecto desarrollado en NodeJs

##Instalación

Para iniciar el aplicativo debe ingresar el siguiente comando.

```bash
docker-compose build
docker-compose up -d
```

## Reglas de validación para Evaluación de producto
    [SellIn]
    - Indica la cantidad de días que tenemos para vender el producto
    - Disminuye 1 cuando cambia el día
    - Cuando es < 0, el precio disminuye 2
    - Cuando es == 0, el precio queda en 0

    [Price]
    - Indica costo del producto
    - Disminuye 1 cuando cambia el día
    - Nunca puede ser negativo
    - Nunca es mayor que 100
    - Queda en 0 cuando SellIn == 0

    [Full Cobertura] OK
    - Aumenta su precio al cambiar el día

    [Mega Cobertura] OK
    - No disminuye días
    - No disminuye precio
    - Tiene un precio fijo de 180

    [Super avance] 
    - Disminuye su precio el doble +2
    

    [Full Cobertura Super Duper]
    - Aumenta su precio al cambiar el día
    - Incrementa precio 2 cuando quedan 10 días o menos [sellIn <=10]
    - Incrementa precio 3 cuando quedan 5 días o menos [sellIn <=5]


    1:Cobertura
    2:Full Cobertura *
    3:Baja Cobertura
    4:Mega Cobertura *
    5:Full cobertura super duper *
    6:Super avance *