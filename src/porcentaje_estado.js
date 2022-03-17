function porcentaje_estado(estado) 
{
    switch(estado){
      case 'UT': return 6.65;break;
      case 'NV': return 8;break;
      case 'TX': return 6.25;break;
      case 'AL': return 4; break;
      case 'CA': return 8.25;break;
    }
}

export default porcentaje_estado;