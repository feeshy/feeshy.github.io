Jekyll::Hooks.register [:posts, :pages], :post_render do |doc|
  if doc.output_ext == ".html"
    doc.output.gsub!(/<iframe[^>]*music\.163\.com\/outchain\/player[^>]*>/i) do |iframe|
      iframe.gsub('&amp;', '&')
    end
  end
end
