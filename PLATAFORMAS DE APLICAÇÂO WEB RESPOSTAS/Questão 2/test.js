const knex = require('knex')(require('./knexfile').development);

async function testDatabase() {
  try {
    await knex('clients').insert({
      email: 'jane.doe@email.com',
      password: 'password123',
      name: 'Jane Doe'
    });

    console.log('Registro inserido com sucesso!');

    const clients = await knex('clients').select('*');
    console.log('Clientes cadastrados:', clients);
  } catch (error) {
    console.error('Erro ao testar o banco de dados:', error);
  } finally {
    knex.destroy(); 
  }
}

testDatabase();
