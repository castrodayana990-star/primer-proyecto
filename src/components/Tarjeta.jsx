
function Tarjeta({icono, descripcion, titulo, horas, destacada}){
    
    return(
        <article className={destacada ? 'tarjeta tarjeta-destacada' : 'tarjeta'}>
            <span className='tarjeta-icono'>{icono}</span>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <span className='tarjeta-horas'>{horas} horas</span>

        </article>
    )
}

export default Tarjeta