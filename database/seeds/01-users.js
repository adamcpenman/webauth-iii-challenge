exports.seed = async (knex) => {
    await knex("users").insert([
        {username: "adambullet", password:"testing1", department:"Ministry of Magic"}
    ])
}