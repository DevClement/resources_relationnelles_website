const {
    create,
    getAll,
    getById,
    deleteById,
    updateById
} = require("../model/resource");

const {
    create_resources_lang,
    getById_Resource_lang,
    getAll_resources_lang
} = require("../model/resources_lang");

const {
    getAllLanguage
} = require("../model/langage");

const {
    create_resource_plus_type_relation,
    getById_Resource_plus_type_relation,
    getAll_resource_plus_type_relation
} = require("../model/resource_plus_type_relation");

const { sign } = require("jsonwebtoken");

const bcrypt = require('bcrypt');

module.exports = {
    create: (req, res) => {
        const body = req.body;
        let id_resource = 0;
        let resource_plus_type_relation = [];

        let ressultado

        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }

            ressultado = results

            id_resource = results.insertId;

            let resources_lang = []
            resources_lang.push({
                id_resource: id_resource,
                title: body.title,
                content: body.content
            })

            create_resources_lang(resources_lang[0], (err, results_resources_lang) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json(
                        err
                    );
                }

                for (let i = 0; i < body.resource_type_relations.length; i++) {
                    resource_plus_type_relation.push([id_resource, body.resource_type_relations[i].id_relationships_types])
                }

                create_resource_plus_type_relation(resource_plus_type_relation, (err, results_resource_plus_type_relation) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json(
                            err
                        );
                    }

                    return res.status(200).json(
                        ressultado
                    );

                })
            });
        });
    },

    getAll: (req, res) => {
        let data = [];
        let title = "";
        let content = "";
        let resource = [];
        let resources_lang = [];
        let resource_type_relations = [];
        getAll((err, results_resource) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }

            if (results_resource === undefined) {
                return res.status(200).json([]);
            }

            resource = results_resource

            getAll_resources_lang((err, results_resource_lang) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json(
                        err
                    );
                }

                if (results_resource_lang === undefined) {
                    return res.status(200).json([]);
                }

                resources_lang = results_resource_lang;

                getAll_resource_plus_type_relation((err, results_resource_type_relations) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json(
                            err
                        );
                    }

                    console.log(results_resource_type_relations);

                    if (results_resource_type_relations === undefined) {
                        return res.status(200).json([]);
                    }

                    for (let i = 0; i < results_resource.length; i++) {

                        for (let j = 0; j < resources_lang.length; j++) {
                            if (parseInt(results_resource[i].id_resource) === parseInt(resources_lang[j].id_resource)) {
                                title = resources_lang[j].title;
                                content = resources_lang[j].content;
                            }
                        }

                        resource_type_relations = [];
                       
                        for (let k = 0; k < results_resource_type_relations.length; k++) {                            
                            if (parseInt(results_resource[i].id_resource) === parseInt(results_resource_type_relations[k].id_resource)) {                                
                                resource_type_relations.push({
                                    id_relationships_types: results_resource_type_relations[k].id_relationships_types
                                })
                            }
                        }

                        data.push({
                            id_resource: results_resource[i].id_resource,
                            status: results_resource[i].status,
                            created_at: results_resource[i].created_at,
                            id_resource_types: results_resource[i].id_resource_types,
                            id_categorie: results_resource[i].id_categorie,
                            id_language: results_resource[i].id_language,
                            title: title,
                            content: content,
                            resource_type_relations: resource_type_relations
                        })
                    }

                    return res.status(200).json(
                        data
                    );

                });
            });
        });
    },

    getById: (req, res) => {
        const id = req.params.id;
        let data = [];
        let resource = [];
        let resources_lang = [];
        let resource_type_relations = [];
        getById(id, (err, results_resource) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }

            if (results_resource === undefined) {
                return res.status(200).json([]);
            }

            resource = results_resource

            getById_Resource_lang(id, (err, results_resource_lang) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json(
                        err
                    );
                }

                if (results_resource_lang === undefined) {
                    return res.status(200).json([]);
                }

                resources_lang = results_resource_lang;

                getById_Resource_plus_type_relation(id, (err, results_resource_type_relations) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json(
                            err
                        );
                    }

                    if (results_resource_type_relations === undefined) {
                        return res.status(200).json([]);
                    }


                    for (let i = 0; i < results_resource_type_relations.length; i++) {
                        resource_type_relations.push({
                            id_relationships_types: results_resource_type_relations[i].id_relationships_types
                        })
                    }

                    data.push({
                        status: resource.status,
                        created_at: resource.created_at,
                        id_resource_types: resource.id_resource_types,
                        id_categorie: resource.id_categorie,
                        id_language: resource.id_language,
                        title: resources_lang.title,
                        content: resources_lang.content,
                        resource_type_relations: resource_type_relations
                    })

                    return res.status(200).json(
                        data[0]
                    );

                });
            });
        });
    },

    deleteById: (req, res) => {
        const id = req.params.id;
        deleteById(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }
            return res.status(200).json(
                results
            );
        });
    },

    updateById: (req, res) => {
        const body = req.body;
        updateById(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "Actualización satisfactoria"
            });
        });
    },

    creaResource: async (req, res) => {
        console.log("ICI");
        const languages = await new Promise( async (error, results) => {
            await getAllLanguage((error, result) => {
                return results(result);
            });
        }).then(value => {
            return value
        });
        console.log('cc');

        res.render('crea_resource');
    },

    editResource: (req, res) => {
        res.render('edit_resource');
    },

    resource: (req, res) => {
        res.render('resources');
    },

};
