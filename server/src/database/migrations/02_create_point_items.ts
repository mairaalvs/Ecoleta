import {Knex} from 'knex';

export async function up(knex: Knex) { 
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();  //chave primaria

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points'); //chave estrangeira
        
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items'); //chave estrangeira
    });
}

export async function down(knex: Knex) { 
    return knex.schema.dropTable('point_items');
}