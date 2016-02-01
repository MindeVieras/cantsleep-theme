<h2 class="title"><?php print t('Shopping cart'); ?></h2>
<?php if ($order && $quantity != 0) : ?>
  <table <?php if (!empty($products_list['classes'])) : print 'class="' . $products_list['classes'] . '" '; endif; ?>>
    <?php if (!empty($products_list['header'])) : ?>
      <thead>
        <tr>
            <?php foreach ($products_list['header'] as $header): ?>
            <th <?php if (!empty($header['header_classes'])) : print 'class="' . $header['header_classes'] . '" ';
           endif; ?>><?php print $header['data']; ?></th>
            <?php endforeach; ?>
        </tr>
      </thead>
    <?php endif; ?>
    <tbody>
        <?php foreach ($products_list['row'] as $line_item_id => $row): ?>
        <tr <?php if (!empty($products_list['row_classes'][$line_item_id])) : print 'class="' . $products_list['row_classes'][$line_item_id] . '"';
       endif; ?>>
            <?php foreach ($row as $field): ?>
            <td <?php if (!empty($field['field_classes'])) : print 'class="' . $field['field_classes'] . '" ';
           endif; ?>><?php print $field['data']; ?></td>
            <?php endforeach; ?>
        </tr>
        <?php endforeach; ?>
    </tbody>
  </table>
  <div class="more-info clearfix">
    <div class="total"><?php print t('Total:') . ' ' . $product_price_total; ?></div>
    <a href="/cart">View Cart</a>
    <a href="/checkout">Checkout</a>
  </div>
<?php elseif ($quantity == 0 || !$order) : ?>
  <div class="empty-cart"><?php print $configuration['empty_cart_message']; ?></div>
<?php endif; ?>
