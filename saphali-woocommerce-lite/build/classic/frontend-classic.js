!function(e){var i=saphaliWoocommerceLiteSettings?.keys||[],n=saphaliWoocommerceLiteSettings?.skeys||[];function t(){var n=e('input[name="payment_method"]:checked').val();e.each(i,(function(i,t){t=Object.keys(t).map((function(e){return t[e]})),e.inArray(n,t)>=0?(!e("#billing_platelshik_is_grpl").is(":checked")||"billing_gruzopoluch"!=i&&"billing_gruzopoluch_okpo"!=i)&&e("#"+i+"_field").show("slow"):e("#"+i+"_field").hide("slow")}))}function o(){var i=void 0!==e('input.shipping_method:checked, input.shipping_method[type="hidden"], select.shipping_method').val()?e('input.shipping_method:checked, input.shipping_method[type="hidden"], select.shipping_method').val().split(":")[0]:"";e.each(n,(function(n,t){t=Object.keys(t).map((function(e){return t[e]})),e.inArray(i,t)>=0||t.filter((function(e){return 0===i.indexOf(e)})).length>0?e("#"+n+"_field").show("slow"):e("#"+n+"_field").hide("slow")}))}e("body").on("click",'input[name="payment_method"]',(function(){t()})),e("body").on("payment_method_selected",(function(){t()})),e("body").on("click","input.shipping_method",(function(){o()})),e("body").on("change","select.shipping_method",(function(){o()})),e("body").on("updated_checkout",(function(){t(),o()}))}(jQuery);
//# sourceMappingURL=frontend-classic.js.map