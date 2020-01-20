users = {
    model : models.users,

    getOne: function(req, res) {
      (!res)
        ? db.find(model, req.params.IDUser, {target: this.getOne})
        : response(res)
    },

    getMany: function(req, res) {
      (!res)
        ? db.get(model, '*', {target: this.getMany})
        : response(res)
    },

    save: function(req, res) {
      (!res)
        ? db.save(model, {target: this.save})
        : response(res)
    },

    delete: function (req, res) {
      (!res)
        ? db.delete(model, res.params.IDUser, {target: this.delete})
        : response(res)
    },

    frontEnd : {
      user : {
        routeView : '/users/:IDUser',
        includes : {},
        bindings : {
          isLoading : false,
          dataProduct : null
        },
        methods : {},
        template : function(){
          return ''
             + this.includes.header
             + $include('uiTemplate.header')
             + (()=>`<section></section>`) // TODO
             + $include('uiTemplate.footer')
        }
      }
    }
  }