exports.seed = async (knex) => {
    await knex("users").insert([
        {username: "adambullet", password:"testing1", departments:"Ministry of Magic"}
    ])
}